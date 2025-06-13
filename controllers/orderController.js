const Order = require("../models/orderSchema");


exports.getPaidOrders = async (req, res ) => {
    try {

        const orders = await Order.find({isPaid : true })
        .populate('userId',' name email ')
        .populate('items.productId', ' name price');

        res.status(201).json({orders});
       

    } catch (error) {
        res.status(500).json({message:error.message});
    }
 
};
