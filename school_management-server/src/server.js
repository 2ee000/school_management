const express = require('express');
require('dotenv').config();

const app = express();
const { PORT } = process.env;
app.use(express.json());

app.listen(PORT, () => {
    console.log(`The server is listeing at ${PORT}`);
})