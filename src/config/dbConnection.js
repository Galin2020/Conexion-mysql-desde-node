const mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
    host: '0.0.0.0',
    user: '****',
    password: '******',
    database: '******'
  });
}