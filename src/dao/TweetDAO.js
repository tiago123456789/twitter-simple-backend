const mongoose = require("mongoose");
const tweetModel = require("../collections/Tweet");

module.exports = class TweetDAO {

    constructor() {
        this._model = tweetModel;
    }

    async findById(id) {
        return await this._model.findById(id);
    }

    async findAll() {
        return await this._model.find({}).sort("-createdAt");
    }

    async create(newData) {
        return await this._model.create(newData); 
    }

    async likedTweet(id) {
        const quantityIncrement = 1;
        return await this._model.update(
            { _id: mongoose.Types.ObjectId(id) },
            { $inc: { likes: quantityIncrement } 
        });
    }
}