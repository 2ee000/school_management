const { schoolService } = require('../services');
const logger = require('../loaders/logger');
const response = require('../config/response');
const HttpStatusCode = require('../config/httpStatusCode');
const { Api404Error } = require('../errors');

module.exports = {

    findAll: async (req, res) => {
        try {
            const schools = await schoolService.getAllSchools();
            if (schools.length === 0) throw new Api404Error("Schools were not found");
            return res.status(HttpStatusCode.OK).send(response("Success to find all schools", schools, HttpStatusCode.OK));
        } catch (error) {
            logger.error(error.stack);
            next(error);
        }
    },

    registSchool: async (req, res) => {
        try {
            const school = await schoolService.insertSchool(req);
            return res.status(HttpStatusCode.CREATED).send(response("Success to signup", {}, HttpStatusCode.CREATED));
        } catch (error) {
            logger.error(error.stack);
            next(error);
        }
    },

    deleteData: async (req, res) => {
        try {
            const school = await schoolService.deleteSchool(req);
            return res.status(HttpStatusCode.CREATED).send(response("Success to delete school data", {}, HttpStatusCode.CREATED));
        } catch (error) {
            logger.error(error.stack);
            next(error);
        }
    },

    updateData: async (req, res) => {
        try {
            const school = await schoolService.updateSchool(req);
            return res.status(HttpStatusCode.CREATED).send(response("Success to update school data", {}, HttpStatusCode.CREATED));
        } catch (error) {
            logger.error(error.stack);
            next(error);
        }
    }
}