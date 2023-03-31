const pool = require('./db');

module.exports = {

    getAllAdmins: async () => {
        const sql = 'SELCET * FROM admin';
        const result = await pool.execute(sql);
        return result[0];
    },

    updateAdmin: async (admin_code, columName, columValue) => {
        const sql = `UPDATE admin SET ${columName}='${columValue} WHERE admin_code = '${admin_code}'`;
        const result = await pool.execute(sql);
        return result;
    },

    deleteAdmin: async (admin_code) => {
        const sql = `DELETE FROM admin WHERE admin_code='${admin_code}'`;
        const result = await pool.execute(sql);
        return result;
    }
}