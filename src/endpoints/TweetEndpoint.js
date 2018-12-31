const TweetBO = require("../bo/TweetBO");

module.exports = class TweetEndpoint {

    constructor() {
        this._bo = new TweetBO();
        this.findAll = this.findAll.bind(this);
        this.create = this.create.bind(this);        
        this.likedTweet = this.likedTweet.bind(this);        
    }

    async findAll(request, response) {
        const tweets = await this._bo.findAll();
        response.json(tweets);
    }

    async create(request, response) {
        const newData = request.body;
        const tweetCreated = await this._bo.create(newData);
        request.io.emit("tweet", tweetCreated);
        response.status(201).json(tweetCreated);
    }

    async likedTweet(request, response, next) {
        try {
            const id = request.params.id;
            const tweetLiked = await this._bo.likedTweet(id);
            request.io.emit("liked-tweet");
            return response.json(tweetLiked);
        } catch(e) {
            next(e);
        }
    }
}