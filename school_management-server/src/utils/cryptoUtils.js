const crypto = require('crypto');
const util = require('util');

const pbkdf2Promise = util.promisify(crypto.pbkdf2);
const randomBytesPromise = util.promisify(crypto.randomBytes);

module.exports = {

    /**
     * Salt Create 
     * @returns String
     */
    createSalt: async () => {
        const new_salt = await randomBytesPromise(64);
        return new_salt.toString("base64");
    },

    /**
     * Create HashedPassword
     * @param {String} password 
     * @returns String, String
     */
    createHashedPassword: async (password, currnet_salt) => {
        const salt = currnet_salt;
        const key = await pbkdf2Promise(password, salt, Number(process.env.KEY_STRETCHING), 64, "sha512");
        const hashedPassword = key.toString("base64");
        return { hashedPassword, salt };
    },

    /**
    * verifyPassword
    * @param {String} password 
    * @param {String} userSalt 
    * @param {String} userPassword 
    * @returns boolean
    */
    verifyPassword: async (password, userSalt, userPassword) => {
        const key = await pbkdf2Promise(password, userSalt, Number(process.env.KEY_STRETCHING), 64, 'sha512');
        const hashedPassword = key.toString('base64');
        if (hashedPassword === userPassword) return true;
        return false;
    }
}