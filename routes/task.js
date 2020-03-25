const express = require('express');
const axios = require('axios');
const Task = require('../model/Task');
const Coupon = require('../model/Coupon');
const taskController = require('../controller/TaskController');

const router = express.Router();

router.get('/list', (req, res) => {
  taskController.list(req, res);
});

router.get('/find', (req, res) => {
  taskController.find(req, res);
});

router.post('/acquire', (req, res) => {
  taskController.acquire(req, res);
});

// router.get('/list', (req, res) => {
//   axios.get('http://localhost:8080/green_travel/api/listTask.action', {
//     params: req.query,
//   }).then((result) => {
//     const { code, data } = result.data;
//     console.log('task list result: ', result.data.code);
//     res.json({
//       code,
//       data: data.map(item => new Task({
//         id: item.task_id,
//         aim: item.aim,
//         integral: item.integral,
//         type: item.type,
//         description: item.description,
//         title: item.title,
//         growth: item.growth,
//       })),
//     });
//   }).catch((e) => {
//     console.log(e);
//     res.json({ code: 1 });
//   });
// });

// router.get('/find', (req, res) => {
//   axios.get('http://localhost:8080/green_travel/api/getTaskCouponByid.action', {
//     params: req.query,
//   }).then((result) => {
//     const { code, data } = result.data;
//     console.log('task find result: ', code);
//     res.json({
//       code,
//       data: new Task({
//         id: data.task_id,
//         type: data.type,
//         aim: data.aim,
//         description: data.description,
//         title: data.title,
//         integral: data.integral,
//         growth: data.growth,
//         coupons: data.coupons.map(item => new Coupon({
//           id: item.co_id,
//           integral: item.integral,
//           description: item.description,
//           day: item.day,
//         })),
//       }),
//     })
//   }).catch((e) => {
//     console.log(e);
//     res.json({ code: 1 });
//   });
// });

// router.post('/acquire', (req, res) => {
//   const user = req.session.user;
//   const { id } = req.body;
//   axios.post('http://localhost:8080/green_travel/api/acquireTask.action', {
//     user_id: user.id,
//     id,
//   }).then((result) => {
//     const { code, data } = result.data;
//     console.log('task acquire result: ', code);
//     const task = {
//       status: data.status,
//       acquire: data.acquire,
//       ...new Task({
//         id: data.task_id,
//         type: data.type,
//         aim: data.aim,
//         title: data.title,
//         description: data.description,
//         growth: data.growth,
//         integral: data.integral,
//         coupons: data.coupons.map(item => new Coupon({
//           id: item.co_id,
//           day: item.day,
//           description: item.description,
//           integral: item.integral,
//         })),
//       }),
//     };
//     const user = req.session.user;
//     user.tasks.push(task);
//     res.json({
//       code,
//       data: task,
//     });
//   }).catch((e) => {
//     console.log(e);
//     res.json({ code: 1 });
//   });
// });

module.exports = router;