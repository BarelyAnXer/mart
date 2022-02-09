const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    uid: {
        type: mongoose.Schema.Types.ObjectId,
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
    },
    quantity: {
        type: Number,
    }
});

const Cart = mongoose.model("cart", cartSchema);

module.exports = Cart;