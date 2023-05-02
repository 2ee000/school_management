const { teacherService } = require('../services');
const logger = require('../loaders/logger');
const { Api404Error, Api400Error } = require('../errors');
const HttpStatusCode = require('../config/httpStatusCode');
const response = require('../config/response');

module.exports = {

    findAll: async (req, res) => {
        try {
            const { teachers, objectCheck } = await teacherService.getAllTeachers();
            if (objectCheck) throw new Api404Error("teachers were not found");
            return res.status(HttpStatusCode.OK).send(response("Success to find all teachers", teachers, HttpStatusCode.OK));
        } catch (error) {
            logger.error(error.stack);
            next(error);
        }
    },

    registTeacher: async (req, res) => {
        try {
            const data = await teacherService.getOneTeacher(req);
            if (!data) throw new Api400Error("TeacherCode or Email is duplicate");
            const teacher = await teacherService.insertTeacher(req);
            return res.status(HttpStatusCode.CREATED).send(response("Success to regist", {}, HttpStatusCode.CREATED));
        } catch (error) {
            logger.error(error.stack);
            next(error);
        }
    },

    deleteTeacherData: async (req, res) => {
        try {
            const teacher = await teacherService.deleteTeacher(req);
            return res.status(HttpStatusCode.CREATED).send(response("Success to delete", {}, HttpStatusCode.CREATED));
        } catch (error) {
            logger.error(error.stack);
            next(error);
        }
    },

    updateTeacher: async (req, res) => {
        try {
            const teacher = await teacherService.updateTeacherData(req);
            return res.status(HttpStatusCode.CREATED).send(response("Success to update", {}, HttpStatusCode.CREATED));
        } catch (error) {
            logger.error(error.stack);
            next(error);
        }
    }
}