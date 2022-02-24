const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    uid: {
        type: mongoose.Schema.Types.ObjectId,
    },
    imgId: {
        type: mongoose.Schema.Types.ObjectId,
    },
    imgUrl: {
        type: String,
        required: true,
        default: "imageUrl",
    },
    category: {
        type: String,
    },
    description: {
        type: String,
    }

});

const Product = mongoose.model("product", productSchema);

module.exports = Product;