const express = require("express");
const TweetEndpoint = require("./endpoints/TweetEndpoint");

const router = express.Router();
const tweetEndpoint = new TweetEndpoint();

module.exports = (() => {

    router.post("/", tweetEndpoint.create)
    router.put("/:id/like", tweetEndpoint.likedTweet)
    router.get("/", tweetEndpoint.findAll);
    
    return router;
})();