module.exports = {
    secretKey: process.env.SECRET_KEY,
    options: {
        algorithm: 'HS256',
        expiresIn: '1m',
    }
}