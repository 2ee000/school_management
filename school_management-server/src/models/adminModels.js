const pool = require('./db');

module.exports = {

    getAllAdmins: async () => {
        const sql = 'SELECT * FROM admin';
        const result = await pool.execute(sql);
        return result[0];
    },

    createAdmin: async (admin_uuid, school_code, hashedPassword, salt, body) => {
        const sql = `INSERT INTO admin VALUES('${admin_uuid}','${body.admin_name}','${hashedPassword}','${salt}','${school_code}')`;
        const result = await pool.execute(sql);
        return result[0];
    },

    // updateAdmin: async (admin_uuid, columName, columValue) => {
    //     const sql = `UPDATE admin SET ${columName}='${columValue} WHERE admin_uuid = '${admin_uuid}'`;
    //     const result = await pool.execute(sql);
    //     return result;
    // },

    deleteAdmin: async (admin_uuid) => {
        const sql = `DELETE FROM admin WHERE admin_uuid='${admin_uuid}'`;
        const result = await pool.execute(sql);
        return result;
    }
}