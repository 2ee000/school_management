const { BaseError } = require("./baseError");
const HttpStatusCode = require("../config/httpStatusCode");

class Api404Error extends BaseError {
    constructor(name, httpCode = HttpStatusCode.NOT_FOUND, description = "Not Found", isOperational = true) {
        super(name, httpCode, description, isOperational);
    }
}

module.exports = { Api404Error };