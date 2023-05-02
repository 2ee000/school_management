const pool = require('./db');

module.exports = {

    getAllTeachers: async () => {
        const sql = 'SELECT * FROM teacher';
        const result = await pool.execute(sql);
        return result[0];
    },

    getOneTeacher: async (teacher_code, teacher_email) => {
        const sql = `SELECT * FROM teacher WHERE teacher_code='${teacher_code}' OR teacher_email ='${teacher_email}'`;
        const result = await pool.execute(sql);
        if (result[0][0]) return false;
        else return true;
    },

    createTeacher: async (school_code, teacher_uuid, hashedPassword, salt, reqData) => {
        const sql = `INSERT INTO teacher VALUES('${reqData.body.teacher_code}','${teacher_uuid}','${reqData.body.teacher_name}','${reqData.body.teacher_email}','${hashedPassword}','${salt}',${reqData.body.class},${reqData.body.gender},${reqData.body.subject},'${reqData.body.phone_number}',${school_code},'${reqData.file.path}','${reqData.body.teacher_about}')`;
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