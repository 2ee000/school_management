const { BaseError } = require("./baseError");
const HttpStatusCode = require("../config/httpStatusCode");

class Api400Error extends BaseError {
    constructor(name, httpCode = HttpStatusCode.BAD_REQUEST, description = "Bad Request", isOperational = true) {
        super(name, httpCode, description, isOperational);
    }
}

module.exports = { Api400Error };