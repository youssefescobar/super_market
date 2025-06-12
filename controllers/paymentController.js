require('dotenv').config(); 

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Payment = require('../models/paymentSchema');
const QRCode = require('qrcode');
const Product = require('../models/productSchema');
const Cart = require('../models/CartSchema');

// 1- Create Stripe PaymentIntent and Payment record
exports.createStripePayment = async (req, res) => {
  try {
    const { userId, cartId } = req.body;

    if (!userId || !cartId) {
      return res.status(400).json({ message: 'Missing userId or cartId' });
    }

    // 1. Fetch cart details from DB
    const cart = await Cart.findById(cartId).populate('items.productId');
    
    if (!cart || cart.items.length === 0) {
      return res.status(404).json({ message: 'Cart not found or empty' });
    }

    // 2. Calculate total amount
    let totalAmount = 0;
    for (const item of cart.items) {
      totalAmount += item.product.price * item.quantity;
    }

    // 3. Create Stripe PaymentIntent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: totalAmount * 100, // Stripe uses cents
      currency: 'usd',
      payment_method_types: ['card'],
    });

    // 4. Create Payment record with cartId reference
    const payment = await Payment.create({
      user: userId,
      cart: cart._id,
      totalAmount,
      stripePaymentIntentId: paymentIntent.id,
      paymentStatus: 'pending',
    });

    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
      paymentId: payment._id,
    });

  } catch (error) {
    console.error('Stripe Payment Error:', error);
    res.status(500).json({ message: 'Payment failed', error: error.message });
  }
};


// 2- Confirm Payment after success
exports.confirmPayment = async (req, res) => {
  try {
    const { paymentId } = req.body;

    // Find payment and populate product details
    const payment = await Payment.findById(paymentId).populate('products.product');
    if (!payment) {
      return res.status(404).json({ message: 'Payment not found' });
    }

    // Update stock for each product
    for (const item of payment.products) {
      const quantityPurchased = item.quantity;
      const product = item.product;

      if (product.stock < quantityPurchased) {
        return res.status(400).json({ message: `Insufficient stock for product: ${product.name}` });
      }

      product.stock -= quantityPurchased;
      await product.save();
    }

    // Update payment status
    payment.paymentStatus = 'paid';

    // Generate QR code
    const qrCodeDataURL = await QRCode.toDataURL(payment._id.toString());
    payment.receiptQRCode = qrCodeDataURL;

    // Save payment
    await payment.save();

    res.status(200).json({
      message: 'Payment confirmed and QR receipt ready',
      receiptQRCode: qrCodeDataURL,
    });

  } catch (error) {
    console.error('Confirm Payment Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};


// 3- Get Receipt by Scanning QR
exports.getReceipt = async (req, res) => {
  try {
    const { paymentId } = req.params;

    const payment = await Payment.findById(paymentId).populate('products.product');
    if (!payment) {
      return res.status(404).json({ message: 'Receipt not found' });
    }

    res.status(200).json({
      message: 'Receipt fetched successfully',
      receipt: {
        products: payment.products.map(item => ({
          name: item.product.name,
          price: item.product.price,
          quantity: item.quantity,
        })),
        totalAmount: payment.totalAmount,
        paidAt: payment.updatedAt,
      },
    });
  } catch (error) {
    console.error('Get Receipt Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
