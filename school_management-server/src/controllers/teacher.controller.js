const { teacherService } = require('../services');

module.exports = {

    findAll: async (req, res) => {
        try {
            const { teachers, objectCheck } = await teacherService.getAllTeachers();
            if (objectCheck) return res.status(404).send({ statudCode: 404, message: "teachers were not found" });
            return res.status(200).send({ data: teachers, statusCode: 200, message: "Success to find all teachers" });
        } catch (error) {
            return res.status(500).send({ statusCode: 500, message: "Server Error" });
        }
    },

    registTeacher: async (req, res) => {
        try {
            const data = await teacherService.getOneTeacher(req);
            if (!data) return res.status(400).send({ statusCode: 400, message: "TeacherCode or Email is duplicate" });
            const teacher = await teacherService.insertTeacher(req);
            return res.status(201).send({ statusCode: 201, message: "Success to regist" });
        } catch (error) {
            return res.status(500).send({ statusCode: 500, message: "Server Error" });
        }
    },

    deleteTeacherData: async (req, res) => {
        try {
            const teacher = await teacherService.deleteTeacher(req);
            return res.status(201).send({ statusCode: 201, message: "Success to delete" });
        } catch (error) {
            return res.status(500).send({ statusCode: 500, message: "Server Error" });
        }
    },

    updateTeacher: async (req, res) => {
        try {
            const teacher = await teacherService.updateTeacherData(req);
            return res.status(201).send({ statusCode: 201, message: "Success to update" });
        } catch (error) {
            return res.status(500).send({ statusCode: 500, message: "Server Error" });
        }
    }
}