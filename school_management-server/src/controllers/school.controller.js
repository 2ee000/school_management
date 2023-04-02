const schoolService = require('../services/school.service');

module.exports = {

    findAll: async (req, res) => {
        try {
            const schools = await schoolService.getAllSchools();
            if (schools.length === 0) return res.status(404).send({ statusCode: 404, message: "schools were not found" });
            return res.status(200).send({ data: schools, statusCode: 200, message: "Success to find all schools" });
        } catch (error) {
            return res.status(500).send({ statusCode: 500, message: "Server Error" });
        }
    },

    registSchool: async (req, res) => {
        try {
            const school = await schoolService.insertSchool(req);
            return res.status(201).send({ statusCode: 201, message: "Success to signup" });
        } catch (error) {
            return res.status(500).send({ statusCode: 500, message: "Server Error" });
        }
    },

    deleteData: async (req, res) => {
        try {
            const school = await schoolService.deleteSchool(req);
            return res.status(201).send({ statusCode: 201, message: "Success to delete school data" });
        } catch (error) {
            return res.status(500).send({ statusCode: 500, message: "Server Error" });
        }
    },

    updateData: async (req, res) => {
        try {
            const school = await schoolService.updateSchool(req);
            return res.status(201).send({ statusCode: 201, message: "Success to update school data" });
        } catch (error) {
            return res.status(500).send({ statusCode: 500, message: "Server Error" });
        }
    }
}