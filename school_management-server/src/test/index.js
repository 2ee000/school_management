const express = require("express");
const router = express.Router();
const controllerFactory = require("./test.controller");
const dbFactory = require('./test.model.execute');
const modelFactory = require('./test.model');
const serviceFactory = require('./test.service');

const userModel = modelFactory(dto)
const userService = serviceFactory(userModel);
const userController = controllerFactory(userService);
router.post('/user',userController.generateUser);


// router.post("/user",controller.generateUser);

// router.post("/private/generateAdmin", async (req, res) => {
// 	const { username, password } = req.body;
// 	res.send(await controller.generateAdmin({ username, password }));
// });

// router.post("/", async (req, res) => {
// 	const { username, password } = req.body;
// 	const user = await controller.createUser({ username, password });
// 	res.send(user);
// });

// module.exports = router;
