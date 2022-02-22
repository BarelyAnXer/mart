const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    // orderId
    buyerId: {
        type: mongoose.Schema.Types.ObjectId,
    },
    sellerID: {
        type: mongoose.Schema.Types.ObjectId,
    },
    productID: {
        type: mongoose.Schema.Types.ObjectId,
    },
    // State: {
    //     type: String
    // },
    // isReceived: {
    //     type: Boolean,
    //     default: false,
    // },

});

const Order = mongoose.model("order", orderSchema);

module.exports = Order;