const pool = require('./db');

module.exports = {

    getAllTeachersList: async () => {
        const sql = 'SELECT profile_image,teacher_uuid,teacher_name,subject,class,teacher_email,gender,teacher_about from teacher';
        const result = await pool.execute(sql);
        return result[0];
    },

    getAllStudentList: async () => {
        const sql = 'SELECT profile_image,student_uuid,student_name,student_code,student_email,class,gender,student_about from student';
        const result = await pool.execute(sql);
        return result[0];
    }
}