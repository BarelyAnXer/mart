const User = require("../Models/User");
const mongoose = require("mongoose");
const {Types} = require("mongoose");
const Product = require("../Models/Product");

module.exports.getUsers = async (req, res) => {
    const users = await User.find();

    res.status(200).json(users)
};


module.exports.deleteUser = async (req, res) => {
    const {userID} = req.body;
    await User.findByIdAndDelete(userID);

    const users = await User.find();

    res.status(200).json(users);
};

module.exports.updateUser = async (req, res) => {
    const {userID, email, address, isVerified} = req.body;

    const temp = await User.findOneAndUpdate(
        {"_id": mongoose.Types.ObjectId(userID)},
        {
            $set: {
                "email": email,
                "address": address,
                "isVerified": isVerified,
            }
        }, {new: true})

    const users = await User.find();

    res.status(200).json(users);
};

module.exports.updateProfile = async (req, res) => {
    const {password, address, phoneNumber, userID} = req.body;

    const temp = await User.findOneAndUpdate(
        {"_id": mongoose.Types.ObjectId(userID)},
        {
            $set: {
                "password": password,
                "address": address,
                "phoneNumber": phoneNumber,
            }
        }, {new: true})


    res.status(200).json({"message": "ok"});
};




