const express = require('express');
const logger = require('../src/loaders/logger');
const { PORT } = require('./config');
const app = express();

async function startServer() {
    await require('../src/loaders/express').expressApplication(app);
    app.get('/', (req, res) => {
        res.render('index.html');
    });
    app.listen(PORT, () => {
        logger.info(`The server is listeing at ${PORT}`);
    });
};

startServer();