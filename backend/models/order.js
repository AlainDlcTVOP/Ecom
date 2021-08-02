const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    orderItems: [{ // link  OrderItem between and Order Array of [] database
        type: mongoose.Schema.Types.ObjectId,
        reg: 'OrderItem',
        require: true,
    }],
    shippingAdress1: {
        type: String,
        require: true,
    },
      shippingAdress2: {
        type: String,
    },
    city: {
        type: String,
        require:true,
    },
    zip: {
        type: String,
        require: true,
    },
    country: {
        type: String,
        require: true,
    },
    phone: {
        type: Number,
        require: true,
    },
    status: {
        type: String,
        require: true,
        default : 'Pending',
    },
    totalPrice: {
        type: Number,
   
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    dateOrdered: {
        type: Date,
        default: Date.now,
    },
})
orderSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

orderSchema.set('toJSON', {
    virtuals: true,
});


exports.Order = mongoose.model('Order', orderSchema);
