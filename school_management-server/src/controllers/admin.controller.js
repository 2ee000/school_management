const { adminService, authService } = require('../services');
const HttpStatusCode = require('../config/httpStatusCode');
const { Api404Error, Api400Error } = require('../errors');
const response = require('../config/response');
const logger = require('../loaders/logger');
module.exports = {

    findAll: async (req, res, next) => {
        try {
            const admins = await adminService.getAllAdmins();
            if (admins.length === 0) throw new Api404Error("User were not found");
            return res.status(HttpStatusCode.OK).send(response("Success to find all admins", admins, HttpStatusCode.OK));
        } catch (error) {
            logger.error(error.stack);
            next(error);
        }
    },

    findOne: async (req, res, next) => {
        try {
            const admin = await adminService.getOneAdmin(req);
            if (admin.length === 0) throw new Api404Error("User were not found");
            return res.status(HttpStatusCode.OK).send(response("Success to find an admins", admin, HttpStatusCode.OK));
        } catch (error) {
            logger.error(error.stack);
            next(error);
        }
    },

    registAdmin: async (req, res, next) => {
        try {
            const admin = await adminService.createAdminUser(req);
            return res.status(HttpStatusCode.CREATED).send(response("Success to signup", {}, HttpStatusCode.CREATED));
        } catch (error) {
            logger.error(error.stack);
            next(error);
        }
    },

    withdraw: async (req, res, next) => {
        try {
            const admin = await adminService.deleteAdmin(req);
            return res.status(HttpStatusCode.CREATED).send(response("Success to withdraw", {}, HttpStatusCode.CREATED));
        } catch (error) {
            logger.error(error.stack);
            next(error);
        }
    },

    login: async (req, res, next) => {
        try {
            const admin = await adminService.getOneAdmin(req);
            if (admin.length === 0) throw new Api400Error("id or pwd was not correct");
            const accessToken = await authService.login(admin, req);
            if (accessToken) return res.status(HttpStatusCode.OK).send(response("Success login", { token: accessToken, school_code: admin[0].school_code }, HttpStatusCode.OK));
            else throw new Api400Error("id or pwd was not correct");
        } catch (error) {
            logger.error(error.stack);
            next(error);
        }
    },

    checkId: async (req, res, next) => {
        try {
            const admin = await adminService.idcheckAdmin(req);
            if (admin) return res.status(HttpStatusCode.OK).send(response("This ID is available", {}, HttpStatusCode.OK));
            return res.status(HttpStatusCode.BAD_REQUEST).send(response("Duplicate ID", {}, HttpStatusCode.BAD_REQUEST));
        } catch (error) {
            logger.error(error.stack);
            next(error);
        }
    }
}
