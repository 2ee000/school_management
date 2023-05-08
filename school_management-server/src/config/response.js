module.exports = {
    createResponse: async (message, data, statusCode) => {
        return {
            data,
            message,
            statusCode
        }
    }
}