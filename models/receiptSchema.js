const mongoose = require('mongoose');

const receiptSchema = new mongoose.Schema({
  paymentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Payment', required: true },
  products: [
    {
      name: String,
      price: Number,
      quantity: Number
    }
  ],
  totalAmount: Number,
  paidAt: Date,
}, { timestamps: true });

module.exports = mongoose.model('Receipt', receiptSchema);
