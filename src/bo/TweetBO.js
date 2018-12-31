const TweetDAO = require("../dao/TweetDAO");
const NotFoundException = require("../exceptions/NotFoundException");

module.exports = class TweetBO {

    constructor() {
        this._dao = new TweetDAO();
    }

    async findAll() {
        return await this._dao.findAll();
    }

    async create(newData) {
        return await this._dao.create(newData); 
    }

    async likedTweet(id) {
        const tweet = await this._dao.findById(id);

        if (!tweet) {
            throw new NotFoundException("Register not found!");
        }

        return await this._dao.likedTweet(id);
    }    
}