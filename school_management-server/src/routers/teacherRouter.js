const express = require('express');
const { teacherController } = require('../controllers');
const { check } = require('express-validator')
const { validationErrorCheck } = require('../middlewares/validator');
const authMiddleware = require('../middlewares/auth');
const teacherRouter = express.Router({ mergeParams: true });
const upload = require('../middlewares/multer');

teacherRouter.get('/all', authMiddleware.checkToken, teacherController.findAll);

teacherRouter.post('/', upload.single('image'), authMiddleware.checkToken, [
    check('teacher_code', 'TeacherCode must not be empty').exists().isString().withMessage('TeacherCode must be string'),
    check('teacher_name', 'TeacherName must not be empty').exists().isString().withMessage('TeacherName must be string'),
    check('teacher_email', 'TeacherEmail must not be empty').exists().isString().withMessage('TeacherEmail must be string'),
    check('password', 'Password must not be empty').exists().isString().withMessage('Password must be string'),
    check('class', 'Class must not be empty').exists().isNumeric().withMessage('Class must be number'),
    check('gender', 'Gender must not be empty').exists().isNumeric().withMessage('Gender must be number'),
    check('subject', 'Subject must not be empty').exists().isNumeric().withMessage('Subject must be number'),
    check('phone_number', 'PhoneNumber must not be empty').exists().isString().withMessage('PhoneNumber must be string'),
    validationErrorCheck
], teacherController.registTeacher);

teacherRouter.delete('/', authMiddleware.checkToken, [
    check('teacher_uuid', 'TeacherUUID must not be empty').exists().isString().withMessage('TeacherUUID must be string'),
    validationErrorCheck
], teacherController.deleteTeacherData);

teacherRouter.patch('/', authMiddleware.checkToken, [
    check('teacher_uuid', 'TeacherUUID must not be empty').exists().isString().withMessage('TeacherUUID must be string'),
    check('profile_image', 'Profile-Image must not be empty').exists().isString().withMessage('Profile-Image must be string'),
    check('teacher_about', 'TeacherAbout must not be empty').exists().isString().withMessage('TeacherAbout must be string'),
    validationErrorCheck
], teacherController.updateTeacher);

module.exports = { teacherRouter };