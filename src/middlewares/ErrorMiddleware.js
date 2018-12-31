module.exports = (error, request, response, next) => {
    switch(error.name) {
        case "NOT_FOUND":
            return response.status(404).json({ statusCode: 404, message: error.message });
            break;
        default:
            return response.status(500).json({ statusCode: 500, message: "Internal server error" });
    }
}