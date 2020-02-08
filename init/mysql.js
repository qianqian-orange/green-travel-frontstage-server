const mysql = require('mysql');
const db = require('../config/db');

const pool  = mysql.createPool(db);

function query(sql, values) {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) return reject(err);
      connection.query(sql, values, (err, result, fields) => {
        connection.release();
        if (err) return reject(err);
        resolve(result);
      });
    })
  });
}

module.exports = query;