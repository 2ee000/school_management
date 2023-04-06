const express = require('express');
const { adminRouter, schoolRouter } = require('./routers')
const cors = require('cors');
const makeSchema = require('./models/makeSchema');
const { logHandler, errorHandler } = require('./middlewares/errorHandler');
require('dotenv').config();

const app = express();
const { PORT } = process.env;

app.use('/upload', express.static('upload'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/admin', adminRouter);
app.use(express.static('apidoc'));
app.use('/school', schoolRouter);
app.use(logHandler);
app.use(errorHandler);

app.get('/', (req, res) => {
    res.render('index.html');
})
app.get('/as', async (req, res) => {
    await makeSchema.createAdminSchema();
    await makeSchema.createSchoolSchema();
    await makeSchema.createStudentSchema();
    await makeSchema.createTeacherSchema();
    return res.status(201).send({ statusCode: 201, message: "Success to create schema" });
})
app.listen(PORT, () => {
    console.log(`The server is listeing at ${PORT}`);

})