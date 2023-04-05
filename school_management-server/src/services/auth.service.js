const { verifyPassword } = require('../utils/cryptoUtils');
const jwt = require('../utils/jwtUtils');
const redis = require('../utils/redisUtils');
const { TOKEN_INVALID, TOKEN_EXPIRED, ACCESSTOKEN_INVALID, REFRESHTOKEN_INVALID, ACCESSTOKEN_EXPIRED, REFRESHTOKEN_EXPIRED, ACCESSTOKEN_NOTFOUND } = require('../config/tokenStatusconfig');

module.exports = {

    login: async (admin, reqData) => {
        try {
            const { admin_pwd } = reqData.body;
            const { salt, password, admin_uuid } = admin[0];
            if (admin.length !== 0) {
                const verified = await verifyPassword(admin_pwd, salt, password);
                if (verified) {
                    const accessToken = await jwt.createAccessToken(admin_uuid);
                    const refreshToken = await jwt.createRefreshToken();
                    await redis.set(admin_uuid, refreshToken);
                    await redis.expire(admin_uuid, 10 * 60 * 60 * 24);
                    return accessToken;
                }
            }
        } catch (error) {
            console.log(error);
            return
        }
    },

    verifyToken: async (reqData) => {
        try {
            const { admin_uuid } = reqData.query;
            const accessToken = reqData.headers.authorization.split('Bearer ')[1];
            const accTokenInfo = await jwt.verify(accessToken); // => invalid, expired, {payload}             
            // accessToken이 invalid된 경우 (accessToken 이 변조된 경우)
            if (accTokenInfo === TOKEN_INVALID) return { accessToken: null, result: ACCESSTOKEN_INVALID };

            // accessToken이 expired된 경우 (accessToken이 만료된 경우)
            else if (accTokenInfo === TOKEN_EXPIRED) {
                // refreshToken 의 유효성 검사 
                const refreshToken = await redis.get(admin_uuid);
                const refTokenInfo = await jwt.refreshVerify(refreshToken, admin_uuid);
                if (refTokenInfo === TOKEN_INVALID) return { accessToken: null, result: REFRESHTOKEN_INVALID };
                if (refTokenInfo === TOKEN_EXPIRED) return { accessToken: null, result: REFRESHTOKEN_EXPIRED };
                else if (refTokenInfo) {
                    let new_accessToken = await jwt.createAccessToken(admin_uuid);
                    return { accessToken: new_accessToken, result: ACCESSTOKEN_EXPIRED }; //refreshToken 이 있으니 access 재발급 해서 result 값주고
                }
            }
            else {
                return { accessToken: accessToken, result: true };
            }
        } catch (error) {
            console.log(error);
            throw new Error('AccessToken is not found');
        }
    }
}