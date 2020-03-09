const express = require('express');
const axios = require('axios');
const PublicWelfare = require('../model/PublicWelfare');
const Task = require('../model/Task');
const Coupon = require('../model/Coupon');
const userController = require('../controller/UserController');

const router = express.Router();

// router.get('/publicWelfareList', (req, res) => {
//   userController.publicWelfareList(req, res);
// });

// router.get('/publicWelfareDetail', (req, res) => {
//   userController.publicWelfareDetail(req, res);
// });

// router.get('/couponList', (req, res) => {
//   userController.couponList(req, res);
// });

// router.get('/taskList', (req, res) => {
//   userController.taskList(req, res);
// });

// router.post('/taskCheck', (req, res) => {
//   userController.taskCheck(req, res);
// });

// router.post('/taskAcquire', (req, res) => {
//   userController.taskAcquire(req, res);
// });

router.get('/publicWelfareList', (req, res) => {
  const user = req.session.user;
  axios.get('http://localhost:8080/green_travel/api/UserpublicWelfareList.action', {
    params: {
      user_id: user.id,
      ...req.query,
    },
  }).then((result) => {
    const { code, data } = result.data;
    console.log('user publicWelfareList result: ', result.data.code);
    res.json({
      code,
      data: {
        donate: data.donate,
        ...new PublicWelfare({
          id: data.pw_id,
          user_id: data.user_id,
          title: data.title,
          description: data.description,
          reason: data.reason,
          integral: data.integral,  
          create_time: data.create_time,
          end_time: data.end_time,
          path: data.path,
          status: data.status,
        }),
      },
    });
  }).catch((e) => {
    console.log(e);
    res.json({ code: 1 });
  });
});

router.get('/publicWelfareDetail', (req, res) => {
  const user = req.session.user;
  axios.get('http://localhost:8080/green_travel/api/publicWelfareDetail.action', {
    params: {
      user_id: user.id,
      ...req.query,
    },
  }).then((result) => {
    const { code, data } = result.data;
    console.log('user publicWelfareDetail result: ', result.data.code);
    res.json({
      code,
      data: {
        donate: data.donate,
        ...new PublicWelfare({
          id: data.pw_id,
          user_id: data.user_id,
          title: data.title,
          description: data.description,
          reason: data.reason,
          integral: data.integral,  
          create_time: data.create_time,
          end_time: data.end_time,
          path: data.path,
          status: data.status,
        }),
      },
    });
  }).catch((e) => {
    console.log(e);
    res.json({ code: 1 });
  });
});

router.get('/couponList', (req, res) => {
  const user = req.session.user;
  axios.get('http://localhost:8080/green_travel/api/userCoupon.action', {
    params: {
      user_id: user.id,
      ...req.query,
    },
  }).then((result) => {
    const { code, data } = result.data;
    console.log('user couponList result: ', result.data.code);
    res.json({
      code,
      data: data.map(item => ({
        create_time: item.create_time,
        ...new Coupon({
          id: item.co_id,
          integral: item.integral,
          day: item.day,
          description: item.description,
        }),
      })),
    });
  }).catch((e) => {
    console.log(e);
    res.json({ code: 1 });
  });
});

router.get('/taskList', (req, res) => {
  const user = req.session.user;
  axios.get('http://localhost:8080/green_travel/api/getUserTask.action', {
    params: {
      user_id: user.id,
    },
  }).then((result) => {
    const { code, data } = result.data;
    console.log('user taskList result: ', result.data.code);
    const tasks = data.map(item => ({
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
    }));
    user.tasks = tasks;
    res.json({
      code,
      data: tasks,
    });
  }).catch((e) => {
    console.log(e);
    res.json({ code: 1 });
  });
});

router.post('/taskCheck', (req, res) => {
  const user = req.session.user;
  axios.post('http://localhost:8080/green_travel/api/checkTask.action', {
    user_id: user.id,
    ...req.body,
  }).then((result) => {
    console.log('user taskCheck result: ', result.data);
    res.json(result.data);
  }).catch((e) => {
    console.log(e);
    res.json({ code: 1 });
  });
});

router.post('/taskAcquire', (req, res) => {
  const user = req.session.user;
  axios.post('http://localhost:8080/green_travel/api/TaskAward.action', {
    user_id: user.id,
    ...req.body,
  }).then((result) => {
    console.log('user taskAcquire result: ', result.data);
    const { data: { lv, growth, integral } } = result.data;
    user.integral = integral;
    user.lv = lv;
    user.growth = growth;
    const task = user.tasks.find(item => item.id === id);
    task.acquire = 1;
    res.json(result.data);
  }).catch((e) => {
    console.log(e);
    res.json({ code: 1 });
  });
});

module.exports = router;