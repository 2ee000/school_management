const pool = require('./db');

module.exports = {

    getAllSchools: async () => {
        const sql = 'SELECT * FROM school';
        const result = await pool.execute(sql);
        return result[0];
    },
    createSchool: async (body) => {
        const sql = `INSERT INTO school VALUES(0,'${body.school_name}','${body.school_email}')`;
        const result = await pool.execute(sql);
        return result[0];
    },

    updateSchool: async (school_code, columName, columValue) => {
        const sql = `UPDATE school SET ${columName}='${columValue}' WHERE school_code = '${school_code}'`;
        const result = await pool.execute(sql);
        return result;
    },

    deleteSchool: async (school_code) => {
        const sql = `DELETE FROM school WHERE school_code='${school_code}'`;
        const result = await pool.execute(sql);
        return result;
    }
}