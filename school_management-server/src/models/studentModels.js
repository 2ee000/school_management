const pool = require('./db');

module.exports = {

    getAllStudents: async () => {
        const sql = 'SELECT * FROM student';
        const result = await pool.execute(sql);
        return result[0];
    },

    createStudent: async (school_code, student_uuid, hashedPassword, salt, body) => {
        const sql = `INSERT INTO student VALUES('${body.student_code}','${student_uuid}','${body.student_name}','${body.student_email}','${hashedPassword}','${salt}','${body.class}','${body.gender}','${body.phone_number}','NULL','NULL','${school_code}')`;
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