const express = require('express');
const { adminRouter, schoolRouter } = require('./routers')

const makeSchema = require('./models/makeSchema');
require('dotenv').config();

const app = express();
const { PORT } = process.env;

app.use(express.json());
app.use('/admin', adminRouter);
app.use('/school', schoolRouter);

app.get('/', async (req, res) => {
    // await makeSchema.createAdminSchema();
    // await makeSchema.createSchoolSchema();
    await makeSchema.createStudentSchema();
    await makeSchema.createTeacherSchema();
    return res.status(201).send({ statusCode: 201, message: "Success to create schema" });
})
app.listen(PORT, () => {
    console.log(`The server is listeing at ${PORT}`);
})