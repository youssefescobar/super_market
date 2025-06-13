const Order = require("../models/orderSchema");


exports.getPaidOrders = async (req, res ) => {
    try {

       const orders = await Order.find({ isPaid: true })
  .sort({ createdAt: -1 })           // newest first
  .limit(20)                         // only get recent 20 orders
  .populate('userId', 'name email')
  .populate('items.productId', 'name price');

        res.status(201).json({orders});
       

    } catch (error) {
        res.status(500).json({message:error.message});
    }
 
};
