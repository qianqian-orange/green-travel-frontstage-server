const userService = require('../service/UserService');
const Pagination = require('../model/Pagination');
const { trips } = require('../config/mock');

function publicWelfareList(req, res) {
  const user = req.session.user;
  const pagination = new Pagination(req.query);
  userService
    .publicWelfareList({ user_id: user.id, pagination })
    .then(data => res.json({ code: 0, data }))
    .catch((e) => {
      console.log(e);
      res.json({ code: 1 });
    });
}

function publicWelfareDetail(req, res) {
  const user = req.session.user;
  const { id } = req.query;
  userService
    .publicWelfareDetail({ id, user_id: user.id })
    .then(data => res.json({ code: 0, data }))
    .catch((e) => {
      console.log(e);
      res.json({ code: 1 });
    });
};

function couponList(req, res) {
  const pagination = new Pagination(req.query);
  const user = req.session.user;
  userService
    .couponList({ user_id: user.id, pagination })
    .then(data => res.json({ code: 0, data }))
    .catch((e) => {
      console.log(e);
      res.json({ code: 1 });
    });
}

function taskList(req, res) {
  const user = req.session.user;
  userService
    .taskList(user.id)
    .then((data) => {
      user.tasks = data;
      res.json({ code: 0, data });
    })
    .catch((e) => {
      console.log(e);
      res.json({ code: 1 });
    });
}

// 这里有个坑，如果多次单独修改某一个tasks元素的属性值，会造成操作丢失的情况。
// 解决方法，对tasks整体重新复制。
function taskCheck(req, res) {
  const { type } = req.body;
  const user = req.session.user;
  userService
    .taskCheck({ user, trips, type })
    .then(() => res.json({ code: 0 }))
    .catch((e) => {
      console.log(e);
      res.json({ code: 1 });
    });
}

function taskAcquire(req, res) {
  const { id } = req.body;
  const user = req.session.user;
  userService
    .taskAcquire({ task_id: id, user })
    .then((data) => {
      const { lv, growth, integral } = data;
      user.integral = integral;
      user.lv = lv;
      user.growth = growth;
      const task = user.tasks.find(item => item.id === id);
      task.acquire = 1;
      res.json({ code: 0, data });
    })
    .catch((e) => {
      console.log(e);
      res.json({ code: 1 });
    });
}

module.exports = {
  publicWelfareList,
  publicWelfareDetail,
  taskList,
  taskCheck,
  taskAcquire,
  couponList,
};