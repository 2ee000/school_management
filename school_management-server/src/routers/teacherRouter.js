const { Router } = require('express');
const teacherController = require('../controllers/teacher.controller');

const teacherRouter = Router({ mergeParams: true });

teacherRouter.get('/all', teacherController.findAll);
teacherRouter.post('/', teacherController.registTeacher);
teacherRouter.delete('/', teacherController.deleteTeacherData);
teacherRouter.patch('/', teacherController.updateTeacher);

module.exports = { teacherRouter };