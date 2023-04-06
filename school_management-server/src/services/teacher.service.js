const { teacherModels, clientListModels } = require('../models');
const { createUUID } = require('../utils/uuidUtil');
const { createSalt, createHashedPassword } = require('../utils/cryptoUtils');
const { isEmpty } = require('../utils/objectCheck');

module.exports = {

    getAllTeachers: async () => {
        try {
            const teachers = await clientListModels.getAllTeachersList();
            const objectCheck = isEmpty(teachers);
            return { teachers, objectCheck };
        } catch (error) {
            console.log(error);
            throw new Error('Error while finding all teachers');
        }
    },

    getOneTeacher: async (reqData) => {
        try {
            const { teacher_code, teacher_email } = reqData.body;
            const teacher = await teacherModels.getOneTeacher(teacher_code, teacher_email);
            return teacher;
        } catch (error) {
            console.log(error);
            throw new Error('Error while finding a teacher');
        }
    },

    insertTeacher: async (reqData) => {
        try {
            const teacher_uuid = createUUID();
            const { password } = reqData.body;
            const { school_code } = reqData.params;
            const current_salt = await createSalt();
            const { hashedPassword, salt } = await createHashedPassword(password, current_salt);
            const teacher = await teacherModels.createTeacher(school_code, teacher_uuid, hashedPassword, salt, reqData);
            return teacher;
        } catch (error) {
            console.log(error);
            throw new Error('Error while creating a teacher');
        }
    },

    deleteTeacher: async (reqData) => {
        try {
            const { teacher_uuid } = reqData.query;
            const teacher = await teacherModels.deleteTeacher(teacher_uuid);
            return teacher;
        } catch (error) {
            console.log(error);
            throw new Error('Error while deleting a teacher');
        }
    },

    updateTeacherData: async (reqData) => {
        try {
            const { teacher_uuid } = reqData.query;
            const teacher = await teacherModels.updateTeacher(teacher_uuid, reqData.body);
            return teacher;
        } catch (error) {
            console.log(error);
            throw new Error('Error while updating a teacher');
        }
    }
}