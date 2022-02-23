const Cart = require("../Models/Cart");
const Order = require("../Models/Order");
const mongoose = require("mongoose");
const Product = require("../Models/Product");
const History = require("../Models/History")
const User = require("../Models/User");


module.exports.createOrder = async (req, res) => {

    const {buyerId} = req.body

    try {
        let userCartItems = await Cart.find({"uid": mongoose.Types.ObjectId(buyerId)});
        let user = await User.findOne({"_id": mongoose.Types.ObjectId(buyerId)})

        for (const userCartItem of userCartItems) {


            let product = await Product.findOneAndUpdate({
                    "_id": userCartItem.productId
                },
                {
                    $inc: {"quantity": -userCartItem.quantity},
                })
            let productSellerId = product.uid;
            let productId = userCartItem.productId;

            let history = await History.create({
                sellerID: mongoose.Types.ObjectId(productSellerId),
                description: `Product ${product.name}  Bought at ${new Date().toISOString().replace(/T/, ' ').      // replace T with a space
                    replace(/\..+/, '')} at the price of ₱${product.price} with Quantity of ${userCartItem.quantity} by buyer with an email of ${user.email}`
            });

            let order = await Order.create({
                "buyerId": buyerId,
                "sellerID": productSellerId,
                "productID": productId,
            });


            await Cart.findOneAndDelete({"_id": mongoose.Types.ObjectId(userCartItem._id)});
        }

        userCartItems = await Cart.find({});


        res.status(201).json(userCartItems);
    } catch (error) {
        res.status(400).json({errors: error});
    }
};

module.exports.getBuyerToReceive = async (req, res) => {

    const {buyerId} = req.body

    try {
        let orders = await Order.find({"buyerId": mongoose.Types.ObjectId(buyerId)})


        let finalArray = []

        for (const order of orders) {

            let prod = await Product.findOne({"_id": mongoose.Types.ObjectId(order.productID)});

            let sellerEmail = await User.findOne({"_id": mongoose.Types.ObjectId(order.sellerID)});

            finalArray.push({
                "_id": order._id,
                "buyerId": order.buyerId,
                "sellerID": order.sellerID,
                "sellerEmail": sellerEmail.email,
                "ProductID": order.ProductID,
                "productName": prod.name,
                "imgUrl": prod.imgUrl,
            })
        }


        res.status(200).json(finalArray);
    } catch (error) {
        res.status(400).json({errors: error});
    }

};

module.exports.getSellerOrders = async (req, res) => {

    const {sellerID} = req.body

    try {
        const orders = await Order.find({"sellerID": mongoose.Types.ObjectId(sellerID)})
        let finalArray = []

        for (const order of orders) {

            let prod = await Product.findOne({"_id": mongoose.Types.ObjectId(order.productID)});

            let buyerEmail = await User.findOne({"_id": mongoose.Types.ObjectId(order.buyerId)});

            finalArray.push({
                "_id": order._id,
                "buyerId": order.buyerId,
                "sellerID": order.sellerID,
                "buyerEmail": buyerEmail.email,
                "ProductID": order.ProductID,
                "productName": prod.name,
                "imgUrl": prod.imgUrl,
            })
        }


        res.status(200).json(finalArray);
    } catch (error) {
        res.status(400).json({errors: error});
    }

};

module.exports.removeOrder = async (req, res) => {

    const {orderID, buyerId} = req.body;

    try {

        await Order.findOneAndDelete({"_id": orderID});

        let orders = await Order.find({"buyerId": mongoose.Types.ObjectId(buyerId)})


        let finalArray = []

        for (const order of orders) {

            let prod = await Product.findOne({"_id": mongoose.Types.ObjectId(order.productID)});

            console.log(prod, "test");

            finalArray.push({
                "_id": order._id,
                "buyerId": order.buyerId,
                "sellerID": order.sellerID,
                "ProductID": order.ProductID,
                "productName": prod.name,
                "imgUrl": prod.imgUrl,
            })
        }

        res.status(200).json(finalArray);
    } catch (error) {
        res.status(400).json({errors: error});
    }

};

// above function is removeOrderBuyer is remove

module.exports.removeOrderSeller = async (req, res) => {

    const {orderID, sellerID} = req.body;

    try {

        await Order.findOneAndDelete({"_id": orderID});

        const orders = await Order.find({"sellerID": mongoose.Types.ObjectId(sellerID)})

        res.status(200).json(orders);
    } catch (error) {
        res.status(400).json({errors: error});
    }

};