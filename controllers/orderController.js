const Order = require("../models/orderSchema");


exports.getPaidOrders = async (req, res ) => {
    try {

    const page = req.query.page || 1;
const limit = 20;
const skip = (page - 1) * limit;

const orders = await Order.find({ isPaid: true })
  .sort({ createdAt: -1 })
  .skip(skip)
  .limit(limit)
  .populate('userId', 'name email')
  .populate('items.productId', 'name price');



        res.status(201).json({orders});
       

    } catch (error) {
        res.status(500).json({message:error.message});
    }
 
};
