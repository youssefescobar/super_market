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
    const cart = await Cart.findOne({ userId }).populate('items.productId');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    if (!cart || cart.items.length === 0) {
      return res.status(404).json({ message: 'Cart not found or empty' });
    }

    // 2. Calculate total amount from cart
    let totalAmount = 0;
    for (const item of cart.items) {
      if (item.productId) {
        totalAmount += item.productId.price * item.quantity;
      }
    }

    // 3. Check/Create Stripe Customer
    if (!user.stripeCustomerId) {
      console.log('Creating Stripe customer for user...');
      const customer = await stripe.customers.create({
        email: user.email,
        name: user.name,
      });
      user.stripeCustomerId = customer.id;
      await user.save();
    }

    // 4. Check if customer has saved cards
    const paymentMethods = await stripe.paymentMethods.list({
      customer: user.stripeCustomerId,
      type: 'card',
    });

    let paymentIntent;
    let requiresAction = false;

    if (paymentMethods.data.length > 0) {
      // --- Case 1: User HAS a saved card (one-click checkout)
      console.log('User has a saved card. Attempting one-click payment...');
      const defaultPaymentMethod = paymentMethods.data[0].id;

      try {
        paymentIntent = await stripe.paymentIntents.create({
          amount: Math.round(totalAmount * 100),
          currency: 'usd',
          customer: user.stripeCustomerId,
          payment_method: defaultPaymentMethod,
          off_session: true,
          confirm: true,
        });
      } catch (err) {
        // If off-session payment fails (e.g., declined), fallback
        if (err.code === 'authentication_required' || err.code === 'card_declined') {
          console.warn('Saved card failed. Falling back to new card entry.');
          requiresAction = true;
          paymentIntent = await stripe.paymentIntents.create({
            amount: Math.round(totalAmount * 100),
            currency: 'usd',
            customer: user.stripeCustomerId,
            setup_future_usage: 'on_session',
          });
        } else {
          throw err;
        }
      }

    } else {
      // --- Case 2: No saved card. Create intent for frontend to handle payment
      console.log('No saved card. Creating intent to collect new card.');
      paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(totalAmount * 100),
        currency: 'usd',
        customer: user.stripeCustomerId,
        setup_future_usage: 'on_session',
      });
      requiresAction = true;
    }

    // 5. Create Payment record in DB
    const payment = await Payment.create({
      user: userId,
      cart: cart._id,
      products: cart.items.map(item => ({
        product: item.productId._id,
        quantity: item.quantity,
      })),
      totalAmount,
      stripePaymentIntentId: paymentIntent.id,
      paymentStatus: 'pending',
    });

    // 6. Respond with clientSecret and action requirement
    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
      paymentId: payment._id,
      requiresAction,
    });

  } catch (error) {
    console.error('Stripe Payment Error:', error);

    if (error.code === 'card_error' || error.code === 'authentication_required') {
      // Optional fallback logic could be handled here if needed
      return res.status(402).json({
        message: 'Card declined or requires authentication',
        requiresAction: true,
        errorMessage: error.message,
      });
    }

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
