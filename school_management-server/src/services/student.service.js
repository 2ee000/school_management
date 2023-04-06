const { studentModels, clientListModels } = require('../models');
const { createUUID } = require('../utils/uuidUtil');
const { createSalt, createHashedPassword } = require('../utils/cryptoUtils');
const { isEmpty } = require('../utils/objectCheck');
module.exports = {

    getAllStudents: async () => {
        try {
            const students = await clientListModels.getAllStudentList();
            const objectCheck = isEmpty(students);
            return { students, objectCheck };
        } catch (error) {
            console.log(error);
            throw new Error('Error while finding all students');
        }
    },

    getOneStudent: async (reqData) => {
        try {
            const { student_code, student_email } = reqData.body;
            const student = await studentModels.getOneStudent(student_code, student_email);
            return student;
        } catch (error) {
            console.log(error);
            throw new Error('Error while finding a student');
        }
    },


    insertStudent: async (reqData) => {
        try {
            const student_uuid = createUUID();
            const { password } = reqData.body;
            const { school_code } = reqData.params;
            const current_salt = await createSalt();
            const { hashedPassword, salt } = await createHashedPassword(password, current_salt);
            const student = await studentModels.createStudent(school_code, student_uuid, hashedPassword, salt, reqData);
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