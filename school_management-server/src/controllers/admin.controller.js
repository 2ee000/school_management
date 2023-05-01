const { adminService, authService } = require('../services');
const HttpStatusCode = require('../config/httpStatusCode');
const { Api404Error } = require('../errors/Api404Error');
const { Api400Error } = require('../errors/Api400Error');
module.exports = {

    findAll: async (req, res, next) => {
        try {
            const admins = await adminService.getAllAdmins();
            if (admins.length === 0) throw new Api404Error("User were not found");
            return res.status(HttpStatusCode.OK).send({ data: admins, statusCode: HttpStatusCode.OK, message: "Success to find all admins" });
        } catch (error) {
            next(error);
        }
    },

    findOne: async (req, res, next) => {
        try {
            const admin = await adminService.getOneAdmin(req);
            if (admin.length === 0) throw new Api404Error("User were not found");
            return res.status(HttpStatusCode.OK).send({ data: admin, statudCode: HttpStatusCode.OK, message: "Success to find an admins" });
        } catch (error) {
            next(error);
        }
    },

    registAdmin: async (req, res, next) => {
        try {
            const admin = await adminService.createAdminUser(req);
            return res.status(HttpStatusCode.CREATED).send({ statudCode: HttpStatusCode.CREATED, message: "Success to signup" });
        } catch (error) {
            next(error);
        }
    },

    withdraw: async (req, res, next) => {
        try {
            const admin = await adminService.deleteAdmin(req);
            return res.status(HttpStatusCode.CREATED).send({ statusCode: HttpStatusCode.CREATED, message: "Success to withdraw" });
        } catch (error) {
            next(error);
        }
    },

    login: async (req, res, next) => {
        try {
            const admin = await adminService.getOneAdmin(req);
            if (admin.length === 0) throw new Api400Error("id or pwd was not correct");
            const accessToken = await authService.login(admin, req);
            if (accessToken) return res.status(HttpStatusCode.OK).send({ token: accessToken, school_code: admin[0].school_code, statusCode: HttpStatusCode.OK, msg: "Success login" });
            else throw new Api400Error("id or pwd was not correct");
        } catch (error) {
            next(error);
        }
    },

    checkId: async (req, res, next) => {
        try {
            const admin = await adminService.idcheckAdmin(req);
            if (admin) return res.status(HttpStatusCode.OK).send({ statusCode: HttpStatusCode.OK, message: "This ID is available" });
            return res.status(HttpStatusCode.BAD_REQUEST).send({ statusCode: HttpStatusCode.BAD_REQUEST, message: "Duplicate ID" });
        } catch (error) {
            next(error);
        }
    }
}
