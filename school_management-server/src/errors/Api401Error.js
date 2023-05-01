const { BaseError } = require("./baseError");
const HttpStatusCode = require("../config/httpStatusCode");

class Api401Error extends BaseError {
    constructor(name, httpCode = HttpStatusCode.UNAUTHORIZED, description = "Unauthorized", isOperational = true) {
        super(name, httpCode, description, isOperational);
    }
}

module.exports = { Api401Error };