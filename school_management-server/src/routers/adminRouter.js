const { Router } = require('express');
const adminController = require('../controllers/admin.controller');
const { studentRouter } = require('./studentRouter');
const { teacherRouter } = require('./teacherRouter');

const adminRouter = Router();

adminRouter.use('/:school_code/teacher', teacherRouter);
adminRouter.use('/:school_code/student', studentRouter);

adminRouter.get('/all', adminController.findAll);
adminRouter.post('/', adminController.registAdmin);
adminRouter.delete('/', adminController.withdraw);

module.exports = { adminRouter };