const express = require('express');
const { adminRouter, schoolRouter } = require('./routers')
require('dotenv').config();

const app = express();
const { PORT } = process.env;

app.use(express.json());
app.use('/admin', adminRouter);
app.use('/school', schoolRouter);

app.listen(PORT, () => {
    console.log(`The server is listeing at ${PORT}`);
})