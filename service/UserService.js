const moment = require('moment');
const { query, transaction } = require('../init/mysql');
const PublicWelfare = require('../model/PublicWelfare');
const Task = require('../model/Task');
const Coupon = require('../model/Coupon');
const taskService = require('./TaskService');
const { growths } = require('../config/level');

function find(id) {
  return query('select l.lv, l.growth, u.* from level l, user u where l.user_id = u.id and u.id = ?', [id])
    .then((result) => {
      if (result.length === 0) return Promise.reject('用户不存在！');
      return result[0];
    })
    .catch(e => Promise.reject(e));
}

function publicWelfareList({ user_id, pagination }) {
  const { currentPage, pageSize } = pagination;
  return query(`select t.*, d.donate from 
    (select * from public_welfare where user_id = ? and destory = 0 limit ?, ?) t
    left join
    (select sum(integral) as donate, public_welfare_id from donate group by public_welfare_id) d
    on t.id = d.public_welfare_id`, [
    user_id,
    (currentPage - 1) * pageSize,
    pageSize,
  ]).then(result => result.map(item => ({ ...new PublicWelfare(item), donate: item.donate ? item.donate : 0 })))
    .catch(e => Promise.reject(e));
}

async function publicWelfareDetail({ id, user_id }) {
  try {
    let result = await query('select * from public_welfare where id = ? and user_id = ? and destory = 0 limit 1', [id, user_id]);
    if (result.length === 0) return Promise.reject('公益不存在！');
    let target = new PublicWelfare(result[0]);
    result = await query('select sum(integral) donate from donate group by public_welfare_id having public_welfare_id = ? limit 1', [id]);
    if (result.length === 0) target.donate = 0;
    else target.donate = result[0].donate;
    return target;
  } catch(e) {
    return Promise.reject(e);
  }
}

function couponList({ user_id, pagination }) {
  const { pageSize, currentPage } = pagination;
  return query('select uc.id, uc.create_time, c.day, c.description, c.integral from user_coupon uc, user u, coupon c where uc.user_id = u.id and uc.coupon_id = c.id and uc.user_id = ? and c.exist = 0 limit ?, ?', [
    user_id,
    (currentPage - 1) * pageSize,
    pageSize,
  ])
    .then(result => result.map(item => ({
      create_time: moment(item.create_time).format('YYYY-MM-DD'),
      ...new Coupon(item),
    })))
    .catch(e => Promise.reject(e));
}

function taskList(user_id) {
  return query('select ut.status, ut.acquire, t.* from task t, user u, user_task ut where t.id = ut.task_id and u.id = ut.user_id and u.id = ? and t.exist = 0', [user_id])
    .then(result => result.map(item => ({
      status: item.status,
      acquire: item.acquire,
      ...new Task(item),
    })))
    .catch(e => Promise.reject(e));
}

async function taskCheck({ user, trips, type }) {
  try {
    const tasks = user.tasks.filter(item => item.type === type);
    if (tasks.every(item => item.status === 1)) return Promise.reject('没有需要更新的任务！');
    let total = 0;
    if (type === 0) total = trips[type].reduce((pre, cur) => pre + cur.mileage, 0);
    else total = trips[type].length;
    const need = tasks.reduce((pre, cur) => pre + cur.aim, 0);
    if (total < need) return;
    const task = tasks.find(item => item.status === 0);
    await query('update user_task set status = 1 where user_id = ? and task_id = ?', [user.id, task.id]);
  } catch (e) {
    return Promise.reject(e);
  }
}

async function taskAcquire({ task_id, user: { tasks, id } }) {
  try {
    const data = tasks.find(item => item.id === task_id);
    if (!data) return Promise.reject('没有领取此任务！');
    if (data.status === 0) return Promise.reject('此任务未完成！');
    if (data.acquire === 1) return Promise.reject('已领取此任务奖励！');
    const [task, user] = await Promise.all([
      taskService.find(task_id),
      find(id),
    ]);
    const growth = user.growth + task.growth;
    let lv = growths.findIndex(item => item > growth);
    if (lv === -1) lv = 15;
    const integral = (parseInt(user.integral * 100, 10) + task.integral * 100) / 100;
    const execute = [
      ['update level set lv = ?, growth = ? where user_id = ?', [lv, growth, id]],
      ['update user set integral = ? where id = ?', [integral, id]],
      ['update user_task set acquire = 1 where user_id = ? and task_id = ?', [id, task.id]],
    ];
    if (task.coupons.length > 0) {
      const date = moment(new Date()).format('YYYY-MM-DD');
      const sql = `insert into user_coupon(user_id, coupon_id, create_time) values ${task.coupons.map(item => `(${user.id}, ${item.id}, '${date}')`).join(',')}`;
      execute.push([sql, []]);
    }
    await transaction(execute);
    return {
      integral,
      lv,
      growth,
    };
  } catch (e) {
    return Promise.reject(e);
  }
}

module.exports = {
  find,
  publicWelfareList,
  publicWelfareDetail,
  taskList,
  taskCheck,
  taskAcquire,
  couponList,
};