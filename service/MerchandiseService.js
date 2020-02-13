const mysql = require('mysql');
const { query, transaction } = require('../init/mysql');
const Merchandise = require('../model/Merchaindise');

function list({ pagination, condition }) {
  const { currentPage, pageSize } = pagination;
  const { name } = condition;
  return query(`select * from merchandise where exist = 0 and status = 1 and name like ${mysql.escape(`%${name}%`)} limit ?,?`, [
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
  return query(`select count(1) as total from merchandise where exist = 0 and status = 1 and name like ${mysql.escape(`%${name}%`)}`)
    .then((result) => result[0].total)
    .catch(e => Promise.reject(e));
}

function find(id) {
  return query('select * from merchandise where exist = 0 and status = 1 and id = ? limit 1', [id])
    .then((result) => {
      if (result[0]) return new Merchandise(result[0]);
      return Promise.reject('商品已过期！');
    })
    .catch(e => Promise.reject(e));
}

async function conversion(id, user) {
  try {
    const merchandise = await find(id);
    if (merchandise.stock === 0) return Promise.reject('商品库存为0！');
    const integral = (parseInt(user.integral * 100, 10) - parseInt(merchandise.integral * 100, 10)) / 100;
    const execute = [
      ['update merchandise set stock = ? where id = ?', [merchandise.stock - 1, id]],
      ['update user set integral = ? where id = ?', [integral, user.id]],
    ];
    const result = await query('select * from user_merchandise where user_id = ? and merchandise_id = ? limit 1', [user.id, id]);
    if (result.length === 0)
      execute.push(['insert into user_merchandise(user_id, merchandise_id, quantity) values(?, ?, ?)', [user.id, id, 1]]);
    else
      execute.push(['update user_merchandise set quantity = ? where user_id = ? and merchandise_id = ?', [result[0].quantity + 1, user.id, id]]);
    await transaction(execute);
    user.integral = integral;
  } catch(e) {
    return Promise.reject(e);
  }
}

module.exports = {
  list,
  total,
  find,
  conversion,
};