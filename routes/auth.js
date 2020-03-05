const express = require('express');
const axios = require('axios');
const { query } = require('../init/mysql');
const userService = require('../service/UserService');
const router = express.Router();

router.get('/login', async (req, res) => {
  const result = await query('select l.lv, l.growth, u.* from level l, user u where l.user_id = u.id and u.id = 123456');
  const user = result[0];
  const tasks = await userService.taskList(user.id);
  user.tasks = tasks;
  req.session.user = user;
  const url = process.env.NODE_ENV === 'development' ? 'http://localhost:8001' : '/';
  res.redirect(url);
});

module.exports = router;