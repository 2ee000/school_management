const { Router } = require('express');
const schoolController = require('../controllers/school.controller');

const schoolRouter = Router();

schoolRouter.get('/all', schoolController.findAll);
schoolRouter.post('/', schoolController.registSchool);
schoolRouter.delete('/:school_code', schoolController.deleteData);
schoolRouter.patch('/:school_code', schoolController.updateData);

module.exports = { schoolRouter };