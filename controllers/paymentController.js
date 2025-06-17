require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Payment = require('../models/paymentSchema');
const QRCode = require('qrcode');
const Product = require('../models/productSchema');
const Cart = require('../models/CartSchema');
const User = require('../models/userSchema'); 
const Receipt = require('../models/receiptSchema')

// Modified: This function now handles creating a customer, saving card info, and creating a payment.
exports.createStripePayment = async (req, res) => {
  try {
    const userId = req.user.id;

    // 1. Get User and Cart
    const user = await User.findById(userId);
    // IMPORTANT: Make sure you populate the cart items here
    const cart = await Cart.findOne({ userId: userId }).populate('items.productId');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    if (!cart || cart.items.length === 0) {
      return res.status(404).json({ message: 'Cart not found or empty' });
    }

    let totalAmount = 0;
    for (const item of cart.items) {
      // Ensure the product exists before calculating total
      if (item.productId) {
          totalAmount += item.productId.price * item.quantity;
      }
    }

    // 2. Check/Create Stripe Customer
    if (!user.stripeCustomerId) {
      console.log('User has no Stripe ID. Creating one.');
      const customer = await stripe.customers.create({
        email: user.email,
        name: user.name,
      });
      user.stripeCustomerId = customer.id;
      await user.save();
    }

    // 3. Create Stripe Payment Intent (Your logic for this was fine)
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(totalAmount * 100), // Stripe expects amount in cents
      currency: 'usd',
      customer: user.stripeCustomerId,
      setup_future_usage: 'on_session',
    });

    // 4. Create Payment Record in your DB -- THIS IS THE FIX
    const payment = await Payment.create({
      user: userId,
      // Map cart items to the format required by the Payment schema
      products: cart.items.map(item => ({
        product: item.productId._id, // Use the ID from the populated product
        quantity: item.quantity,
      })),
      totalAmount,
      stripePaymentIntentId: paymentIntent.id,
      paymentStatus: 'pending',
    });

    // 5. Send Response
    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
      paymentId: payment._id,
    });

  } catch (error) {
    console.error('Stripe Payment Error:', error);
    res.status(500).json({ message: 'Payment failed', error: error.message });
  }
};

exports.confirmPayment = async (req, res) => {
    try {
        // Check if the user is authenticated. If not, req.user will be undefined.
        if (!req.user) {
            // This error tells the client that they need to be logged in.
            return res.status(401).json({ message: 'Authentication error: User not logged in.' });
        }

        const { paymentId } = req.body;
        // Now it's safe to access req.user.id
        const userId = req.user.id; 

        const payment = await Payment.findById(paymentId).populate('products.product');

        if (!payment) {
            return res.status(404).json({ message: 'Payment not found' });
        }

        // Security check: Ensure the user owns this payment
        if (payment.user.toString() !== userId) {
            return res.status(401).json({ message: 'Not authorized for this payment' });
        }

        // Check and update product stock
        for (const item of payment.products) {
            const product = item.product;
            if (product.stock < item.quantity) {
                return res.status(400).json({ message: `Insufficient stock for product: ${product.name}` });
            }
            product.stock -= item.quantity;
            await product.save();
        }

        // Update payment status
        payment.paymentStatus = 'paid';
        
        // --- START: Changes for QR code and response ---

        // 1. First, create the receipt document to get its unique _id
        const newReceipt = new Receipt({
            userId: userId,
            paymentId: payment._id,
            products: payment.products.map(item => ({
                name: item.product.name,
                price: item.product.price,
                quantity: item.quantity,
            })),
            totalAmount: payment.totalAmount,
            paidAt: new Date(),
        });
        
        // 2. Generate the QR code using the new receipt's ID
        const qrData = JSON.stringify({ receiptId: newReceipt._id });
        const qrCodeDataURL = await QRCode.toDataURL(qrData);

        // 3. Save the QR code to both the receipt and the payment documents
        newReceipt.receiptQRCode = qrCodeDataURL;
        payment.receiptQRCode = qrCodeDataURL;

        // 4. Save both updated documents
        await newReceipt.save();
        await payment.save();
        
        // --- END: Changes for QR code and response ---

        // Clear the user's cart
        await Cart.findOneAndDelete({ userId: payment.user });

        // Return only a success message
        res.status(200).json({
            message: 'Payment confirmed and receipt generated successfully!',
        });

    } catch (error) {
        console.error('Confirm Payment Error:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// 3- Get Receipt by Scanning QR (No changes needed here)
exports.getReceipt = async (req, res) => {
  try {
    const { paymentId } = req.params;
    const payment = await Payment.findById(paymentId).populate('products.product');

    if (!payment) {
      return res.status(404).json({ message: 'Receipt not found' });
    }

    const receipt = {
      products: payment.products.map(item => ({
        name: item.product.name,
        price: item.product.price,
        quantity: item.quantity,
      })),
      totalAmount: payment.totalAmount,
      paidAt: payment.updatedAt,
      paymentId: payment._id.toString(), 
    };

    // Convert receipt to stringified JSON for QR
    const qrData = JSON.stringify(receipt);

    // Generate QR Code as Data URL
    const qrCode = await QRCode.toDataURL(qrData);

    res.status(200).json({
      message: 'Receipt fetched successfully',
      receipt,
      qrCode, // This is a base64 image you can embed directly
    });
  } catch (error) {
    console.error('Get Receipt Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
