require('dotenv').config();

module.exports = {
    PORT: process.env.PORT,

    /**
     * jwt CONFIG
     */
    secretKey: process.env.SECRET_KEY,
    options: {
        algorithm: 'HS256',
        expiresIn: '10m',
    },

    /**
     * Mysql CONFIG
     */
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,

    /**
     * Redis CONFIG
     */
    REDIS_HOST: process.env.REDIS_HOST,
    REDIS_USERNAME: process.env.REDIS_USERNAME,
    REDIS_PASSWORD: process.env.REDIS_PASSWORD,
    REDIS_PORT: process.env.REDIS_PORT,
}