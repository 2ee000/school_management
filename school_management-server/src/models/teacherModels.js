const pool = require('./db');

module.exports = {

    getAllTeachers: async () => {
        const sql = 'SELCET * FROM teacher';
        const result = await pool.execute(sql);
        return result[0];
    },

    updateTeacher: async (teacher_code, columName, columValue) => {
        const sql = `UPDATE teacher SET ${columName}='${columValue} WHERE teacher_code = '${teacher_code}'`;
        const result = await pool.execute(sql);
        return result;
    },

    deleteTeacher: async (teacher_code) => {
        const sql = `DELETE FROM teacher WHERE teacher_code='${teacher_code}'`;
        const result = await pool.execute(sql);
        return result;
    }
}