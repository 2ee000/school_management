const { secretKey } = require('../config');
const jwt = require('../utils/jwtUtils');
const redis = require('../utils/redisUtils');
const { authService } = require('../services');
const { ACCESSTOKEN_INVALID, REFRESHTOKEN_INVALID, ACCESSTOKEN_EXPIRED, REFRESHTOKEN_EXPIRED } = require('../config/tokenStatusconfig');

const authMiddleware = {
    checkToken: async (req, res, next) => {

        try {
            const { accessToken, result } = await authService.verifyToken(req);

            if (result === ACCESSTOKEN_INVALID) {
                return res.status(403).send({ err: "accessToken is invalid", statusCode: 403, msg: 'Forbidden' });
            }
            else if (result === REFRESHTOKEN_INVALID) {
                return res.status(401).send({ err: "refreshToken is invalid", statusCode: 401, msg: '재로그인 해주세요' });
            }
            else if (result === ACCESSTOKEN_EXPIRED) {
                res.header('AccessToken', "Bearer " + accessToken);
                return next();
            }
            else if (result === REFRESHTOKEN_EXPIRED) {
                return res.status(401).send({ statusCode: 401, msg: '재로그인 해주세요' });
            }
            res.header('AccessToken', "Bearer " + accessToken);

            return next();
        } catch (error) {

            error.status = 500;
            error.msg = 'token is not found';
            next(error);
        }
    }
}
module.exports = authMiddleware;