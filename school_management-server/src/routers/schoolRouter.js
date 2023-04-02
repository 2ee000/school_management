const { Router } = require('express');
const { schoolController } = require('../controllers');
const { check } = require('express-validator')
const { validationErrorCheck } = require('../middlewares/validator');

const schoolRouter = Router();

schoolRouter.get('/all', schoolController.findAll);

schoolRouter.post('/', [
    check('school_name', 'SchoolName must not be empty').exists().isString().withMessage('SchoolName must be string'),
    check('school_email', 'SchoolEmail must not be empty').exists().isString().withMessage('SchoolEmail must be string'),
    validationErrorCheck
], schoolController.registSchool);

schoolRouter.delete('/:school_code', [
    check('school_code', 'SchoolCode must not be empty').exists().isNumeric().withMessage('SchoolCode must be number'),
    validationErrorCheck
], schoolController.deleteData);

schoolRouter.patch('/:school_code', [
    check('school_code', 'SchoolCode must not be empty').exists().isNumeric().withMessage('SchoolCode must be number'),
    validationErrorCheck
], schoolController.updateData);

module.exports = { schoolRouter };