const mongoose = require("mongoose");

const historySchema = new mongoose.Schema({
    sellerID: {
        type: mongoose.Schema.Types.ObjectId,
    },
    description: {
        type: String,
    },

});

const History = mongoose.model("history", historySchema);

module.exports = History;