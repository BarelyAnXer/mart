const User = require("../Models/User");
const jwt = require("jsonwebtoken");
require('dotenv').config();
// handle erros
const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = {email: "", password: ""};

    if (err.message === "email doesnt exists") {
        errors.email = "email is not registered";
    }

    if (err.message === "incorrect password") {
        errors.password = "that password is incorrect";
    }

    if (err.code === 11000) {
        errors.email = "email is already registered";
        return errors;
    }

    if (err.message.includes("user validation failed")) {
        Object.values(err.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message;
        });
    }

    return errors;
};

//create toke
const secret = "secretkey";
const maxAge = 3 * 24 * 60 * 60;
// 3days in secons unlike cookie that expects milliseconds
const createToken = (id) => {
    return jwt.sign({id}, secret, {
        expiresIn: maxAge,
    });
};

module.exports.signup_get = (req, res) => {

};

module.exports.login_get = (req, res) => {

};

module.exports.signup_post = async (req, res) => {
    const {email, password, address, accType, phoneNumber} = req.body

    console.log({email, password, address, accType});

    try {
        const user = await User.create({email, password, address, accType, phoneNumber});
        const token = createToken(user._id);
        res.cookie("jwt", token, {httpOnly: true, maxAge: maxAge * 1000});
        res.status(201).json({user: user._id});
    } catch (error) {
        const errors = handleErrors(error);
        res.status(400).json({errors: errors});
    }
};

module.exports.login_post = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await User.login(email, password);
        const token = createToken(user._id);
        res.cookie("jwt", token, {httpOnly: true, maxAge: maxAge * 1000});
        res.status(200).json(user);
        // res.status(200).json({user: user._id, redirectUrl: "/seller"});
        // res.redirect('http://localhost:3000/seller');
    } catch (error) {
        const errors = handleErrors(error);
        res.status(400).json({errors});
    }
};

module.exports.logout_get = (req, res) => {
    res.cookie("jwt", "", {maxAge: 1});
    res.redirect("/");
};