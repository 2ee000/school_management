const { Router } = require('express');
const { adminController } = require('../controllers');
const { studentRouter } = require('./studentRouter');
const { teacherRouter } = require('./teacherRouter');
const { check } = require('express-validator');
const { validationErrorCheck } = require('../middlewares/validator');

const adminRouter = Router();

adminRouter.use('/:school_code/student', studentRouter);
adminRouter.use('/:school_code/teacher', teacherRouter);

adminRouter.get('/all', adminController.findAll);

adminRouter.post('/', [
    check('admin_name', 'AdminName must not be empty').exists().isString().withMessage('AdminName must be string'),
    check('password', 'Password must not be empty').exists().isString().withMessage('Password must be string'),
    check('school_code', 'SchoolCode must not be empty').exists().isNumeric().withMessage('SchoolCode must be Number'),
    validationErrorCheck
], adminController.registAdmin);

adminRouter.delete('/', [
    check('admin_uuid', 'AdminUUID must not be empty').exists().isString().withMessage('AdminUUID must be string'),
    validationErrorCheck
], adminController.withdraw);


const adminController = require('../controllers/admin.controller');


const adminRouter = Router();

adminRouter.get('/all', adminController.findAll);
adminRouter.post('/', adminController.registAdmin);
adminRouter.delete('/', adminController.withdraw);
module.exports = { adminRouter };