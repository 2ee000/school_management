const { BaseError } = require("./baseError");
const HttpStatusCode = require("../config/httpStatusCode");

class Api403Error extends BaseError {
    constructor(name, httpCode = HttpStatusCode.FORBIDDEND, description = "Forbidden", isOperational = true) {
        super(name, httpCode, description, isOperational);
    }
}

module.exports = { Api403Error };