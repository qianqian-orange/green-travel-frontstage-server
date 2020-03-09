const express = require('express');
const axios = require('axios');
const { query } = require('../init/mysql');
const userService = require('../service/UserService');
const User = require('../model/User');
const Task = require('../model/Task');
const router = express.Router();

// router.get('/login', async (req, res) => {
//   const result = await query('select l.lv, l.growth, u.* from level l, user u where l.user_id = u.id and u.id = 123456');
//   const user = new User(result[0]);
//   const tasks = await userService.taskList(user.id);
//   user.tasks = tasks;
//   req.session.user = user;
//   const url = process.env.NODE_ENV === 'development' ? 'http://localhost:8001/user' : '/user';
//   res.redirect(url);
// });

router.get('/login', async (req, res) => {
  try {
    const result = await axios.post('http://localhost:8080/green_travel/api/Authentication.action', {
      id: 123456,
      name: 'xiaoming'
    });
    const { code } = result.data;
    if (code !== 0) res.send(result.data);
  } catch (e) {
    res.json({ code: 1 });
  }
  axios.get('http://localhost:8080/green_travel/api/getUser.action', {
    params: {
      id: 123456,
    },
  }).then((result) => {
    const { code, data } = result.data;
    console.log('/auth login result: ', code);
    const user = {
      id: data.user_id,
      integral: data.integral,
      name: data.name,
      lv: data.lv,
      growth: data.growth,
      tasks: data.tasks.map(item => ({
        status: item.status,
        acquire: item.acquire,
        ...new Task({
          id: item.task_id,
          growth: item.growth,
          integral: item.integral,
          title: item.title,
          type: item.type,
          aim: item.aim,
          description: item.description,
        }),
      })),
    };
    req.session.user = user;
    res.redirect('/user');
  }).catch((e) => {
    console.log(e);
    res.json({ cdoe: 1 });
  });
});

module.exports = router;