const express = require('express');
const { adminRouter } = require('./routers/adminRouter');
require('dotenv').config();

const app = express();
const { PORT } = process.env;

app.use(express.json());
app.use('/admin', adminRouter);

app.listen(PORT, () => {
    console.log(`The server is listeing at ${PORT}`);
})