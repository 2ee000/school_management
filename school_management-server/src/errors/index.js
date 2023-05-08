module.exports = {
    ...require('../errors/Api400Error'),
    ...require('../errors/Api401Error'),
    ...require('../errors/Api403Error'),
    ...require('../errors/Api404Error'),
    ...require('../errors/BaseError')
}