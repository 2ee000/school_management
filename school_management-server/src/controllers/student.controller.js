const { studentService } = require('../services');
const logger = require('../loaders/logger');
const HttpStatusCode = require('../config/httpStatusCode');
const response = require('../config/response');
const { Api404Error, Api400Error } = require('../errors');

module.exports = {

    findAll: async (req, res) => {
        try {
            const { students, objectCheck } = await studentService.getAllStudents();
            if (objectCheck) throw new Api404Error("students were not found");
            return res.status(HttpStatusCode.OK).send(response("Success to find all students", students, HttpStatusCode.OK));
        } catch (error) {
            logger.error(error.stack);
            next(error);
        }
    },

    registStudent: async (req, res) => {
        try {
            const data = await studentService.getOneStudent(req);
            if (!data) throw new Api400Error("StudentCode or Email is duplicate");
            const student = await studentService.insertStudent(req);
            return res.status(HttpStatusCode.CREATED).send(response("Success to regist", {}, HttpStatusCode.CREATED));
        } catch (error) {
            logger.error(error.stack);
            next(error);
        }
    },

    deleteStudentData: async (req, res) => {
        try {
            const student = await studentService.deleteStudent(req);
            return res.status(HttpStatusCode.CREATED).send(response("Success to delete", {}, HttpStatusCode.CREATED));
        } catch (error) {
            logger.error(error.stack);
            next(error);
        }
    },

    updateStudent: async (req, res) => {
        try {
            const student = await studentService.updateStudentData(req);
            return res.status(HttpStatusCode.CREATED).send(response("Success to update", {}, HttpStatusCode.CREATED));
        } catch (error) {
            logger.error(error.stack);
            next(error);
        }
    }
}