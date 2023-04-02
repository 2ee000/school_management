const pool = require('./db');

module.exports = {

    getAllTeachers: async () => {
        const sql = 'SELECT * FROM teacher';
        const result = await pool.execute(sql);
        return result[0];
    },

    createTeacher: async (school_code, teacher_uuid, hashedPassword, salt, body) => {
        const sql = `INSERT INTO teacher VALUES('${body.teacher_code}','${teacher_uuid}','${body.teacher_name}','${body.teacher_email}','${hashedPassword}','${salt}','${body.class}','${body.gender}','${body.subject}','${body.phone_number}','NULL','NULL','${school_code}')`;
        const result = await pool.execute(sql);
        return result;
    },

    updateTeacher: async (teacher_uuid, body) => {
        const sql = `UPDATE teacher SET profile_image='${body.profile_image}',teacher_about = '${body.teacher_about}' WHERE teacher_uuid = '${teacher_uuid}'`;
        const result = await pool.execute(sql);
        return result;
    },

    deleteTeacher: async (teacher_uuid) => {
        const sql = `DELETE FROM teacher WHERE teacher_uuid='${teacher_uuid}'`;
        const result = await pool.execute(sql);
        return result;
    }
}