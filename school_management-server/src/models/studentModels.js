const pool = require('../loaders/db');

module.exports = {

    getAllStudents: async () => {
        const sql = 'SELECT * FROM student';
        const result = await pool.execute(sql);
        return result[0];
    },

    getOneStudent: async (student_code, student_email) => {
        const sql = `SELECT * FROM student WHERE student_code='${student_code}' OR student_email ='${student_email}'`;
        const result = await pool.execute(sql);
        if (result[0][0]) return false;
        else return true;
    },

    createStudent: async (school_code, student_uuid, hashedPassword, salt, reqData) => {
        const sql = `INSERT INTO student VALUES('${reqData.body.student_code}','${student_uuid}','${reqData.body.student_name}','${reqData.body.student_email}','${hashedPassword}','${salt}',${reqData.body.class},${reqData.body.gender},'${reqData.body.phone_number}',${school_code},'${reqData.file.path}','${reqData.body.student_about}')`;
        const result = await pool.execute(sql);
        return result;
    },

    updateStudent: async (student_uuid, body) => {
        const sql = `UPDATE student SET profile_image='${body.profile_image}',student_about = '${body.student_about}' WHERE student_uuid = '${student_uuid}'`;
        const result = await pool.execute(sql);
        return result;
    },

    deleteStudent: async (student_uuid) => {
        const sql = `DELETE FROM student WHERE student_uuid='${student_uuid}'`;
        const result = await pool.execute(sql);
        return result;
    }
}