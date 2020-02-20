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

async function conversion({
  serial_number,
  merchandise_id,
  user_id,
  quantity,
  create_time,
}) {
  try {
    const merchandise = await find(merchandise_id);
    if (merchandise.stock === 0) return Promise.reject('商品库存为0！');
    const result = await query('select integral from user where id = ? limit 1', [user_id]);
    if (result.length === 0) return Promise.reject('没有该用户！');
    const integral = result[0].integral;
    const value = (parseInt(integral * 100, 10) - parseInt(merchandise.integral * 100, 10)) / 100;
    if (value < 0) return Promise.reject('用户积分不足！');
    const execute = [
      ['update merchandise set stock = ? where id = ?', [merchandise.stock - 1, merchandise.id]],
      ['update user set integral = ? where id = ?', [value, user_id]],
      ['insert into conversion(serial_number, user_id, merchandise_id, quantity, create_time) values(?, ?, ?, ?, ?)', [serial_number, user_id, merchandise_id, quantity, create_time]],
    ];
    await transaction(execute);
    return value;
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