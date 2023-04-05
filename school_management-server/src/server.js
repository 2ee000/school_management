const express = require('express');
const { adminRouter, schoolRouter } = require('./routers')
const makeSchema = require('./models/makeSchema');
const { logHandler, errorHandler } = require('./middlewares/errorHandler');

require('dotenv').config();

const app = express();
const { PORT } = process.env;

app.use(express.json());
app.use('/admin', adminRouter);
app.use(express.static('apidoc'));
app.use('/school', schoolRouter);
app.get('/', (req, res) => {
    res.render('index.html');
})
// app.get('/', async (req, res) => {
//     // await makeSchema.createAdminSchema();
//     // await makeSchema.createSchoolSchema();
//     await makeSchema.createStudentSchema();
//     await makeSchema.createTeacherSchema();
//     return res.status(201).send({ statusCode: 201, message: "Success to create schema" });
// })
app.use(logHandler);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`The server is listeing at ${PORT}`);
})