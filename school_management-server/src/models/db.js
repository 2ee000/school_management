const mysql = require('mysql2');
const config = require('../config/mysqlconfig');
const pool = mysql.createPool(config.db);
module.exports = pool.promise();