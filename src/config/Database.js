const mongoose = require("mongoose");
mongoose.Promise = Promise;

// Initialize connect database.
mongoose.connect("mongodb://127.0.0.1:27017/twitter-simple", { useNewUrlParser: true });