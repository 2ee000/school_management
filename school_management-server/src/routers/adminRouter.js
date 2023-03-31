const { Router } = require('express');
const adminController = require('../controllers/admin.controller');


const adminRouter = Router();

adminRouter.get('/all', adminController.findAll);
adminRouter.post('/', adminController.registAdmin);
adminRouter.delete('/', adminController.withdraw);
module.exports = { adminRouter };