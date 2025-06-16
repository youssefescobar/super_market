// const Receipt = require('../models/receiptSchema');

// exports.getReceipt = async (req, res) => {
//   try {
//     const { paymentId } = req.params;

//     const payment = await Payment.findById(paymentId).populate('products.product');

//     if (!payment) {
//       return res.status(404).json({ message: 'Receipt not found' });
//     }

//     const receiptData = {
//       paymentId: payment._id,
//       products: payment.products.map(item => ({
//         name: item.product.name,
//         price: item.product.price,
//         quantity: item.quantity,
//       })),
//       totalAmount: payment.totalAmount,
//       paidAt: payment.updatedAt,
//     };

//     // Optional: prevent duplicates
//     const existingReceipt = await Receipt.findOne({ paymentId });
//     if (existingReceipt) {
//       return res.status(200).json({
//         message: 'Receipt already exists',
//         receipt: existingReceipt,
//       });
//     }

//     // Save receipt to database
//     const savedReceipt = await Receipt.create(receiptData);

//     res.status(200).json({
//       message: 'Receipt fetched and saved successfully',
//       receipt: savedReceipt,
//     });

//   } catch (error) {
//     console.error('Get Receipt Error:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };
