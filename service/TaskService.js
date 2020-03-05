const { query } = require('../init/mysql');
const Task = require('../model/Task');
const Coupon = require('../model/Coupon');

function list({ pagination }) {
  const { pageSize, currentPage } = pagination;
  return query('select * from task where exist = 0 limit ?, ?', [
    (currentPage - 1) * pageSize,
    pageSize,
  ])
    .then(result => result.map(item => new Task(item)))
    .catch(e => Promise.reject(e));
}

async function find(id) {
  try {
    let result = await query('select * from task where exist = 0 and id = ? limit 1', [id]);
    if (result.length === 0) return Promise.reject('此任务不存在！');
    const task = new Task(result[0]);
    result = await query('select c.* from task t, task_coupon tc, coupon c where t.id = ? and c.exist = 0 and tc.task_id = t.id and tc.coupon_id = c.id', [id]);
    task.coupons = result.map(item => new Coupon(item));
    return task;
  } catch(e) {
    return Promise.reject(e);
  }
}

async function acquire({ user, task_id }) {
  try {
    const task = await find(task_id);
    const tasks = user.tasks.filter(item => item.type === task.type);
    if (tasks.find(item => item.id === task.id)) return Promise.reject('每个任务只能完成一次！');
    if (!tasks.every(item => item.status === 1)) return Promise.reject('请先完成正在进行的同种类型任务！');
    await query('insert into user_task(user_id, task_id) values(?, ?)', [user.id, task.id]);
    return task;
  } catch(e) {
    return Promise.reject(e);
  }
}

module.exports = {
  list,
  find,
  acquire,
};