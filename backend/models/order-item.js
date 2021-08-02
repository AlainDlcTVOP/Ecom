const mongoose = require('mongoose');

const orderItemSchema = mongoose.Schema({
    quantity: {
        type: Number,
        require: true,
    },
    product: { // orderItem ref to Product
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }
})

exports.orderItem = mongoose.model('OrderItem', orderItemSchema);
