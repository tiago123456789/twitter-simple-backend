const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

const routesApp = require("../Route");
const errorMiddleware = require("../middlewares/ErrorMiddleware");

// Settings connection database.
require("./Database"); 

// Settings middleware do parse data to json.
app.use(bodyParser.json());

// Enable cors on application.
app.use(cors);

app.use((request, response, next) => {
    request.io = io;
    next();
});

// Settings routes application.
app.use("/tweets", routesApp);

// Middleware responsable handle errors.
app.use(errorMiddleware);

server.listen(3000, () => console.log("Server started on address: http://localhost:3000"))