const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, "Enter a valid Email"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [6, "Minimumn password length is 6"],
    },
    address: {
        type: String,
        required: true,
    },
    accType: {
        type: String,
        required: true,
    },
});

// hooks fire a function before saving to db
userSchema.pre("save", async function (next) {
    console.log("user about to be created", this);
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// static method to login user
userSchema.statics.login = async function (email, password) {
    const user = await this.findOne({email});
    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if (auth) {
            return user;
        }
        throw Error("incorrect password");
    }
    throw Error("email doesnt exists");
};

const User = mongoose.model("user", userSchema);

module.exports = User;