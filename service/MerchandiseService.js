const mysql = require('mysql');
const { query, transaction } = require('../init/mysql');
const Merchandise = require('../model/Merchaindise');
const userService = require('./UserService');

function list({ pagination, condition }) {
  const { currentPage, pageSize } = pagination;
  const { name } = condition;
  return query(`select * from merchandise where exist = 0 and status = 1 and name like ${mysql.escape(`%${name}%`)} limit ?,?`, [
    (currentPage - 1) * pageSize,
    pageSize,
  ])
    .then(result => result.map(item => new Merchandise(item)))
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
      return Promise.reject('商品已下架！');
    })
    .catch(e => Promise.reject(e));
}

async function conversion({
  serial_number,
  merchandise_id,
  user_id,
  quantity,
  create_time,
  uc_id,
}) {
  try {
    const merchandise = await find(merchandise_id);
    if (merchandise.stock === 0) return Promise.reject('商品库存为0！');
    const user = await userService.find(user_id);
    let integral = (parseInt(user.integral * 100, 10) - parseInt(merchandise.integral * 100, 10)) / 100;
    const execute = [];
    if (uc_id !== -1) {
      const coupon = await userService.coupon({ user_id: user.id, uc_id });
      if (coupon.status === 1) return Promise.reject('优惠卷已使用！');
      if (coupon.create_time.getTime() + (coupon.day + 1) * 24 * 60 * 60 * 1000 < Date.now()) return Promise.reject('优惠卷已过期！');
      integral += coupon.integral;
    }
    if (integral < 0) return Promise.reject('用户积分不足！');
    if (uc_id !== -1) execute.push(['update user_coupon set status = 1 where id = ?', [uc_id]]);
    execute.push(['update merchandise set stock = ? where id = ?', [merchandise.stock - 1, merchandise.id]]);
    execute.push(['update user set integral = ? where id = ?', [integral, user_id]]);
    execute.push(['insert into conversion(serial_number, user_id, merchandise_id, quantity, create_time) values(?, ?, ?, ?, ?)', [serial_number, user_id, merchandise_id, quantity, create_time]]);
    await transaction(execute);
    return integral;
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