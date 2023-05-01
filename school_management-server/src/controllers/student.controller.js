const { studentService } = require('../services');

module.exports = {

    findAll: async (req, res) => {
        try {
            const { students, objectCheck } = await studentService.getAllStudents();
            if (objectCheck) return res.status(404).send({ statudCode: 404, message: "students were not found" });
            return res.status(200).send({ data: students, statusCode: 200, message: "Success to find all students" });
        } catch (error) {
            return res.status(500).send({ statusCode: 500, message: "Server Error" });
        }
    },

    registStudent: async (req, res) => {
        try {
            const data = await studentService.getOneStudent(req);
            if (!data) return res.status(400).send({ statusCode: 400, message: "StudentCode or Email is duplicate" });
            const student = await studentService.insertStudent(req);
            return res.status(201).send({ statusCode: 201, message: "Success to regist" });
        } catch (error) {
            return res.status(500).send({ statusCode: 500, message: "Server Error" });
        }
    },

    deleteStudentData: async (req, res) => {
        try {
            const student = await studentService.deleteStudent(req);
            return res.status(201).send({ statusCode: 201, message: "Success to delete" });
        } catch (error) {
            return res.status(500).send({ statusCode: 500, message: "Server Error" });
        }
    },

    updateStudent: async (req, res) => {
        try {
            const student = await studentService.updateStudentData(req);
            return res.status(201).send({ statusCode: 201, message: "Success to update" });
        } catch (error) {
            return res.status(500).send({ statusCode: 500, message: "Server Error" });
        }
    }
}