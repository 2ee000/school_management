const crypto = require('crypto');
const util = require('util');

const pdkdf2Promise = util.promisify(crypto.pbkdf2);
const randomBytesPromise = util.promisify(crypto.randomBytes);

module.exports = {

    createSalt: async () => {
        const new_salt = await randomBytesPromise(64);
        return new_salt.toString("base64");
    },

    createHashedPassword: async (password, currnet_salt) => {
        const salt = currnet_salt;
        const key = await pdkdf2Promise(password, salt, Number(process.env.KEY_STRETCHING), 64, "sha512");
        const hashedPassword = key.toString("base64");
        return { hashedPassword, salt };
    }
}