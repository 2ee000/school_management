const { Router } = require('express');
const studentController = require('../controllers/student.controller');

const studentRouter = Router({ mergeParams: true });

studentRouter.get('/all', studentController.findAll);
studentRouter.post('/', studentController.registStudent);
studentRouter.delete('/', studentController.deleteStudentData);
studentRouter.patch('/', studentController.updateStudent);

module.exports = { studentRouter };