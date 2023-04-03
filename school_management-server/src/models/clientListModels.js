const pool = require('../models/db');

module.exports = {

    getAllTeachersList: async () => {
        const sql = 'SELECT teacher_name,subject,class,teacher_email,gender from teacher';
        const result = await pool.execute(sql);
        return result[0];
    },

    getAllStudentList: async () => {
        const sql = 'SELECT student_name,student_code,student_email,class,gender from student';
        const result = await pool.execute(sql);
        return result;
    }

}