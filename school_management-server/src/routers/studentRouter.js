const express = require('express');
const { studentController } = require('../controllers');
const { check } = require('express-validator')
const authMiddleware = require('../middlewares/auth');
const { validationErrorCheck } = require('../middlewares/validator');
const upload = require('../middlewares/multer');

const studentRouter = express.Router({ mergeParams: true });

studentRouter.get('/all', authMiddleware.checkToken, studentController.findAll);

studentRouter.post('/', upload.single('image'), authMiddleware.checkToken, [
    check('student_code', 'StudentCode must not be empty').exists().isString().withMessage('StudentCode must be string'),
    check('student_name', 'StudentName must not be empty').exists().isString().withMessage('StudentName must be string'),
    check('student_email', 'StudentEmail must not be empty').exists().isString().withMessage('StudentEmail must be string'),
    check('password', 'Password must not be empty').exists().isString().withMessage('Password must be string'),
    check('class', 'Class must not be empty').exists().isNumeric().withMessage('Class must be number'),
    check('gender', 'Gender must not be empty').exists().isNumeric().withMessage('Gender must be number'),
    check('phone_number', 'PhoneNumber must not be empty').exists().isString().withMessage('PhoneNumber must be string'),
    validationErrorCheck
], studentController.registStudent);

studentRouter.delete('/', authMiddleware.checkToken, [
    check('student_uuid', 'StudentUUID must not be empty').exists().isString().withMessage('StudentUUID must be string'),
    validationErrorCheck
], studentController.deleteStudentData);

studentRouter.patch('/', authMiddleware.checkToken, [
    check('student_uuid', 'StudentUUID must not be empty').exists().isString().withMessage('StudentUUID must be string'),
    check('profile_image', 'Profile-Image must not be empty').exists().isString().withMessage('Profile-Image must be string'),
    check('student_about', 'StudentAbout must not be empty').exists().isString().withMessage('StudentAbout must be string'),
    validationErrorCheck
], studentController.updateStudent);

module.exports = { studentRouter };