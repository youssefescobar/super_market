const mongoose =require('mongoose');

 const orderSchema =new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    items: [{
        productId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Product',
            required: true
        },
        quantity:Number

    }
    ],

  totalAmount: Number,
  isPaid: { type: Boolean, default: false },
  paidAt: Date,
  status: { type: String, default: 'pending' }, // done

 },{timestamps:true});

 orderSchema.index({ isPaid: 1 });


 const Order = mongoose.model('Order',orderSchema);

 module.exports = Order;