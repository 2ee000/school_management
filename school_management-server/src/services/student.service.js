const studentModels = require('../models/studentModels');
const { createUUID } = require('../utils/uuidUtil');
const { createSalt, createHashedPassword } = require('../utils/cryptoUtils');
module.exports = {

    getAllStudents: async () => {
        try {
            const students = await studentModels.getAllStudents();
            return students;
        } catch (error) {
            console.log(error);
            throw new Error('Error while finding all students');
        }
    },

    insertStudent: async (reqData) => {
        try {
            const student_uuid = createUUID();
            const { password } = reqData.body;
            const { school_code } = reqData.params;
            const current_salt = await createSalt();
            const { hashedPassword, salt } = await createHashedPassword(password, current_salt);
            const student = await studentModels.createStudent(school_code, student_uuid, hashedPassword, salt, reqData.body);
            return student;
        } catch (error) {
            console.log(error);
            throw new Error('Error while creating a student');
        }
    },

    deleteStudent: async (reqData) => {
        try {
            const { student_uuid } = reqData.query;
            const student = await studentModels.deleteStudent(student_uuid);
            return student;
        } catch (error) {
            console.log(error);
            throw new Error('Error while deleting a student');
        }
    },

    updateStudentData: async (reqData) => {
        try {
            const { student_uuid } = reqData.query;
            const student = await studentModels.updateStudent(student_uuid, reqData.body);
            return student;
        } catch (error) {
            console.log(error);
            throw new Error('Error while updating a student');
        }
    }
}