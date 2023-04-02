const { Router } = require('express');
const adminController = require('../controllers/admin.controller');
const { teacherRouter } = require('./teacherRouter');

const adminRouter = Router();

adminRouter.use('/:school_code/teacher', teacherRouter);

adminRouter.get('/all', adminController.findAll);
adminRouter.post('/', adminController.registAdmin);
adminRouter.delete('/', adminController.withdraw);

module.exports = { adminRouter };