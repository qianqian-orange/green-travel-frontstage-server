const mysql = require('mysql');
const query = require('../init/mysql');
const Merchandise = require('../model/Merchaindise');

function list({ pagination, condition }) {
  const { currentPage, pageSize } = pagination;
  const { name } = condition;
  return query(`select * from merchandise where exist = 0 and name like ${mysql.escape(`%${name}%`)} limit ?,?`, [
    (currentPage - 1) * pageSize,
    pageSize,
  ])
    .then((result) => {
      const merchandiseList = [];
      result.forEach((element) => {
        merchandiseList.push(new Merchandise(element));
      });
      return merchandiseList;
    })
    .catch(e => Promise.reject(e));
}

function total(condition) {
  const { name } = condition;
  return query(`select count(1) as total from merchandise where exist = 0 and name like ${mysql.escape(`%${name}%`)}`)
    .then((result) => result[0].total)
    .catch(e => Promise.reject(e));
}

function find(id) {
  return query('select * from merchandise where exist = 0 and id = ? limit 1', [id])
    .then((result) => {
      return new Merchandise(result[0]);
    })
    .catch(e => Promise.reject(e));
}

module.exports = {
  list,
  total,
  find,
};