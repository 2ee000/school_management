const express = require('express');

const { PORT } = require('./config');
console.log(PORT);
const app = express();

async function startServer() {
    await require('../src/loaders/express').expressApplication(app);
    app.get('/', (req, res) => {
        res.render('index.html');
    });
    app.listen(PORT, () => {
        console.log(`The server is listeing at ${PORT}`);
    });
};

startServer();