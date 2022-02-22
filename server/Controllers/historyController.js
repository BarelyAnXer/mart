const History = require("../Models/History");
const mongoose = require("mongoose");
const User = require("../Models/User");

module.exports.createHistory = async (req, res) => {
    const {description, sellerID} = req.body;

    try {
        const history = await History.create({
            "sellerID": mongoose.Types.ObjectId(sellerID),
            "description": description,
        });


        res.status(201).send(history);
    } catch (error) {
        res.status(400).json({errors: error});
    }
}

module.exports.getSellerHistory = async (req, res) => {
    const {sellerID} = req.body;

    try {
        const histories = await History.find({"sellerID": mongoose.Types.ObjectId(sellerID)});

        res.status(201).send(histories);
    } catch (error) {
        res.status(400).json({errors: error});
    }
}

module.exports.getAdminHistory = async (req, res) => {
    try {

        const sellers = await User.find({"accType": "Seller"});

        let adminHistory = [];

        for (const seller of sellers) {

            let histories = await History.find({"sellerID": seller._id});


            adminHistory.push({
                "sellerName": seller.email,
                "histories": histories,
            });

            console.log({
                "sellerName": seller.email,
                "histories": histories,
            });

        }

        res.status(201).json(adminHistory);
    } catch (error) {
        res.status(400).json({errors: error});
    }
}