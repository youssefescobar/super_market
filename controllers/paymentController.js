require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Payment = require('../models/paymentSchema');
const QRCode = require('qrcode');
const Product = require('../models/productSchema');
const Cart = require('../models/CartSchema');
const User = require('../models/userSchema'); 

// Modified: This function now handles creating a customer, saving card info, and creating a payment.
exports.createStripePayment = async (req, res) => {
  try {
    const userId = req.user.id;

    // 1. Get User and Cart
    const user = await User.findById(userId);
    const cart = await Cart.findOne({ userId: userId }).populate('items.productId');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    if (!cart || cart.items.length === 0) {
      return res.status(404).json({ message: 'Cart not found or empty' });
    }

    let totalAmount = 0;
    for (const item of cart.items) {
      totalAmount += item.productId.price * item.quantity;
    }

    // 2. Check if user is a Stripe Customer. If not, create one.
    if (!user.stripeCustomerId) {
      console.log('User has no Stripe ID. Creating one.');
      const customer = await stripe.customers.create({
        email: user.email,
        name: user.name,
      });
      user.stripeCustomerId = customer.id;
      await user.save();
    }

    // 3. Check if the Customer has a saved card
    const paymentMethods = await stripe.paymentMethods.list({
      customer: user.stripeCustomerId,
      type: 'card',
    });

    let paymentIntent;

    if (paymentMethods.data.length > 0) {
      // --- Case 1: User HAS a saved card ---
      console.log('User has a saved card. Creating payment for one-click checkout.');
      const defaultPaymentMethod = paymentMethods.data[0].id;

      paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(totalAmount * 100),
        currency: 'usd',
        customer: user.stripeCustomerId,
        payment_method: defaultPaymentMethod, // Use the saved card
        off_session: true, // Indicates the customer is not actively in the session
        confirm: true, // Immediately try to charge the card
      });

    } else {
      // --- Case 2: User has NO saved card ---
      console.log('User has no saved card. Preparing to save a new one.');
      paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(totalAmount * 100),
        currency: 'egp',
        customer: user.stripeCustomerId,
        // This flag tells Stripe: "When the user enters a card on the frontend
        // to pay for this, save it for future use."
        setup_future_usage: 'on_session',
      });
    }

    // 4. Create Payment Record in your DB
    const payment = await Payment.create({
      user: userId,
      cart: cart._id,
      totalAmount,
      stripePaymentIntentId: paymentIntent.id,
      paymentStatus: 'pending', // Will be 'paid' after confirmation
    });

    // 5. Send Response
    // The clientSecret is used by the frontend to finalize the payment
    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
      paymentId: payment._id,
      // New flag to tell the frontend if it needs to ask for card details
      requiresAction: paymentIntent.status === 'requires_action' || paymentIntent.status === 'requires_payment_method',
    });

  } catch (error) {
    console.error('Stripe Payment Error:', error);
    // If a one-click payment fails (e.g., insufficient funds), create a new intent
    // that allows the user to enter a new card.
    if (error.code === 'card_error') {
        const { userId } = req.user;
        const user = await User.findById(userId);
        let totalAmount = 0; // Recalculate or fetch from cart again
        const cart = await Cart.findOne({ userId: userId }).populate('items.productId');
        for (const item of cart.items) { totalAmount += item.productId.price * item.quantity; }

        const paymentIntent = await stripe.paymentIntents.create({
            amount: Math.round(totalAmount * 100),
            currency: 'egp',
            customer: user.stripeCustomerId,
            setup_future_usage: 'on_session',
        });
        return res.status(200).json({
            clientSecret: paymentIntent.client_secret,
            requiresAction: true,
            errorMessage: 'Your card was declined. Please use a different card.'
        });
    }
    res.status(500).json({ message: 'Payment failed', error: error.message });
  }
};

// New: Endpoint to check for and retrieve saved cards
exports.getSavedCards = async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await User.findById(userId);

        if (!user || !user.stripeCustomerId) {
            // If the user has no Stripe ID, they have no saved cards.
            return res.status(200).json({ hasSavedCards: false, cards: [] });
        }
        
        // List all payment methods (cards) for the Stripe customer
        const paymentMethods = await stripe.paymentMethods.list({
            customer: user.stripeCustomerId,
            type: 'card',
        });
        
        if (paymentMethods.data.length > 0) {
            res.status(200).json({
                hasSavedCards: true,
                cards: paymentMethods.data.map(pm => ({
                    id: pm.id,
                    brand: pm.card.brand,
                    last4: pm.card.last4,
                    exp_month: pm.card.exp_month,
                    exp_year: pm.card.exp_year,
                })),
            });
        } else {
            res.status(200).json({ hasSavedCards: false, cards: [] });
        }

    } catch (error) {
        console.error('Get Saved Cards Error:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// 2- Confirm Payment after success (No changes needed here)
exports.confirmPayment = async (req, res) => {
  try {
    const { paymentId } = req.body;
    const payment = await Payment.findById(paymentId).populate('products.product');
    if (!payment) {
      return res.status(404).json({ message: 'Payment not found' });
    }
    for (const item of payment.products) {
      const quantityPurchased = item.quantity;
      const product = item.product;
      if (product.stock < quantityPurchased) {
        return res.status(400).json({ message: `Insufficient stock for product: ${product.name}` });
      }
      product.stock -= quantityPurchased;
      await product.save();
    }
    payment.paymentStatus = 'paid';
    const qrCodeDataURL = await QRCode.toDataURL(payment._id.toString());
    payment.receiptQRCode = qrCodeDataURL;
    await payment.save();
    await Cart.findOneAndDelete({ userId: payment.user });
    res.status(200).json({
      message: 'Payment confirmed and QR receipt ready',
      receiptQRCode: qrCodeDataURL,
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