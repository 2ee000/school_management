const pool = require('../common/db');

module.exports = db = (sql,params) => {
    return await pool.execute(sql,params);
};