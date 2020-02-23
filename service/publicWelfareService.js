const { query, transaction } = require('../init/mysql');
const PublicWelfare = require('../model/PublicWelfare');
const UserService = require('./UserService');

function save(publicWelfare) {
  const {
    user_id,
    path,
    title,
    create_time,
    end_time,
    description,
    integral,
  } = publicWelfare;
  return query('insert into public_welfare(user_id, title, description, create_time, end_time, path, integral) values(?, ?, ?, ?, ?, ?, ?)', [
    user_id,
    title,
    description,
    create_time,
    end_time,
    path,
    integral,
  ]);
}

function list({ pagination }) {
  const { currentPage, pageSize } = pagination;
  return query(`select t.*, d.donate from 
    (select p.*, u.name from public_welfare p inner join user u on p.user_id = u.id where p.exist = 0 and p.status = 1 limit ? , ?) t
    left join
    (select sum(integral) as donate, public_welfare_id from donate group by public_welfare_id) d
    on t.id = d.public_welfare_id`, [
    (currentPage - 1) * pageSize,
    pageSize,
  ]).then(result => result.map(item => ({ ...new PublicWelfare(item), name: item.name, donate: item.donate ? item.donate : 0 })))
    .catch(e => Promise.reject(e));
}

function total() {
  return query('select count(1) as total from public_welfare p inner join user u on p.user_id = u.id where p.exist = 0 and p.status = 1')
    .then((result) => result[0].total)
    .catch(e => Promise.reject(e));
}

async function find(id) {
  try {
    let result = await query('select p.*, u.name from public_welfare p inner join user u on p.user_id = u.id where p.id = ? and p.exist = 0 and p.status = 1 limit 1', [id]);
    if (result.length === 0) return Promise.reject('公益不存在！');
    let target = { ...new PublicWelfare(result[0]), name: result[0].name };
    result = await query('select sum(integral) donate from donate group by public_welfare_id having public_welfare_id = ? limit 1', [id]);
    if (result.length === 0) target.donate = 0;
    else target.donate = result[0].donate;
    return target;
  } catch(e) {
    return Promise.reject(e);
  }
}

async function donate({ id, user_id, integral }) {
  try {
    const publicWelfare = await find(id);
    const current = new Date();
    const end = new Date(publicWelfare.end_time);
    if (end < current) return Promise.reject('已到截止日期！');
    const user = await UserService.find(user_id);
    if (user.integral < integral) return Promise.reject('用户积分不足！');
    const value = (parseInt(user.integral * 100, 10) - parseInt(integral * 100, 10)) / 100;
    const execute = [
      ['update user set integral = ? where id = ?', [value, user_id]],
    ];
    const result = await query('select * from donate where user_id = ? and public_welfare_id = ? limit 1', [
      user_id,
      id,
    ]);
    if (result.length === 0) execute.push(['insert into donate(user_id, public_welfare_id, integral) values(?, ?, ?)', [user_id, id, integral]]);
    else execute.push(['update donate set integral = ? where user_id = ? and public_welfare_id = ?', [integral + result[0].integral, user_id, id]]);
    await transaction(execute);
    return value;
  } catch(e) {
    return Promise.reject(e);
  }
}

function rank({ id, pagination }) {
  const { pageSize, currentPage } = pagination;
  return query('select donate.id, donate.integral, user.name from donate inner join user on user.id = donate.user_id where public_welfare_id = ? order by donate.integral desc limit ?, ?', [
    id,
    (currentPage - 1) * pageSize,
    pageSize,
  ])
    .then(result => result)
    .catch(e => Promise.reject(e));
}

module.exports = {
  save,
  list,
  total,
  find,
  donate,
  rank,
};