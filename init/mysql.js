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

function transactionCore(connection, execute) {
  let promise = Promise.resolve();
  for (let i = 0; i < execute.length; i += 1) {
    promise = new Promise((resolve, reject) => {
      promise
        .then(() => {
          const [sql, params] = execute[i];
          connection.query(sql, params, (err, result) => {
            if (err) {
              connection.rollback(() => {
                connection.release();
              });
              return reject(err);
            }
            resolve(result);
          });
        })
        .catch(e => reject(e));
    });
  }
  return promise;
}

function transaction(execute) {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) return reject(err);
      connection.beginTransaction((err) => {
        if (err) return reject(err);
        transactionCore(connection, execute)
          .then(() => {
            connection.commit((err) => {
              if (err) {
                connection.rollback(() => {
                  connection.release();
                });
                return reject(err);
              }
              connection.release();
              resolve();
            });
          })
          .catch(e => reject(e));
      });
    });
  });
}

function getConnection() {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) return reject(err);
      resolve(connection);
    });
  });
}

module.exports = {
  query,
  getConnection,
  transaction,
};