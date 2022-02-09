const Cart = require("../Models/Cart");
const Product = require("../Models/Product");
const mongoose = require("mongoose");

module.exports.addToCart = async (req, res) => {
    const {quantity, uid, productId} = req.body;

    try {
        const addedItem = await Cart.create({
            uid,
            productId,
            quantity,
        });
        const products = await Cart.find({"uid": uid});
        res.status(201).json(products);
    } catch (error) {
        res.status(400).json({errors: error});
    }
};

module.exports.readUserCart = async (req, res) => {
    const {uid} = req.body;

    try {
        let cartItems = await Cart.find({"uid": uid});

        let finalArray = []

        for (const cartItem of cartItems) {
            let product = await Product.find({"_id": cartItem.productId})
            finalArray.push([cartItem, product[0]]);
        }

        // finalArray.forEach((element, index) => {
        //     console.log(element);
        // });

        res.status(201).send(finalArray);
    } catch (error) {
        res.status(400).json({errors: error});
    }
}

module.exports.deleteCartItem = async (req, res) => {
    const {cartItemId, uid} = req.body;

    console.log(cartItemId, uid, "uwooh?");

    try {
        const temp = await Cart.findOneAndDelete({"_id": mongoose.Types.ObjectId(cartItemId)});

        let cartItems = await Cart.find({"uid": mongoose.Types.ObjectId(uid)});

        let finalArray = []

        for (const cartItem of cartItems) {
            let product = await Product.find({"_id": cartItem.productId})
            finalArray.push([cartItem, product[0]]);
        }

        res.send(finalArray);
    } catch (error) {
        console.log(error);
        res.send(error);
    }


}

// module.exports
