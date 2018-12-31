const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema({
    author: {
        type: String,
        required: [true, "Field is required!"]
    },
    content: {
        type: String,
        required: [true, "Field is required!"] 
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    likes: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model("Tweet", tweetSchema);