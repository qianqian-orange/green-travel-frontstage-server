const express = require('express');
const axios = require('axios');
const publicWelfareController = require('../controller/PublicWelfareController');

const router = express.Router();

// router.post('/save', (req, res) => {
//   publicWelfareController.save(req, res);
// });

// router.get('/list', (req, res) => {
//   publicWelfareController.list(req, res);
// });

// router.get('/total', (req, res) => {
//   publicWelfareController.total(req, res);
// });

// router.get('/find', (req, res) => {
//   publicWelfareController.find(req, res);
// });

// router.post('/donate', (req, res) => {
//   publicWelfareController.donate(req, res);
// });

// router.get('/rank', (req, res) => {
//   publicWelfareController.rank(req, res);
// });

router.post('/save', (req, res) => {
  const user = req.session.user;
  axios.post('http://localhost:8080/green_travel/api/insertPublicWelfare.action', {
    user_id: user.id,
    ...req.body,
  })
    .then((result) => {
      const { code } = result.data;
      console.log('publicWelfare save result: ', code);
      res.json({ code });
    })
    .catch((e) => {
      console.log(e);
      res.json({ code: 1 });
    });
});

// "reason": "不过关",
// "create_time": "2020-02-05 00:00:00",
// "destory": 0,
// "end_time": "2020-02-27 00:00:00",
// "description": "献出你的爱心啦",
// "title": "人间有真情，人间有真爱",
// "exist": 0,
// "path": "14/53cf3988194d422c869d1fb5f26d5aba.jpg",
// "pw_id": 2342,
// "user_id": 456654,
// "integral": 333.0,
// "name": "sky",
// "donate": 55.400000000000006,
// "status": 1

router.get('/list', (req, res) => {
  axios.get('http://localhost:8080/green_travel/api/getPublicWelfare.action', {
    params: req.query,
  }).then((result) => {
    const { code, data } = result.data;
    console.log('publicWelfare list result: ', code);
    res.json({
      code,
      data: data.map(item => ({
        id: item.pw_id,
        title: item.title,
        description: item.description,
        integral: item.integral,
        create_time: item.create_time,
        end_time: item.end_time,
        path: item.path,
        name: item.name,
        donate: item.donate,
      })),
    });
  }).catch((e) => {
    console.log(e);
    res.json({ code: 1 });
  });
});

router.get('/find', (req, res) => {
  axios.get('http://localhost:8080/green_travel/api/getPublicWelfareByid.action', {
    params: req.query,
  }).then((result) => {
    const { code, data } = result.data;
    console.log('publicWelfare find result: ', code);
    res.json({
      code,
      data: data.map(item => ({
        id: item.pw_id,
        title: item.title,
        description: item.description,
        integral: item.integral,
        create_time: item.create_time,
        end_time: item.end_time,
        path: item.path,
        name: item.name,
        donate: item.donate,
      })),
    });
  }).catch((e) => {
    console.log(e);
    res.json({ code: 1 });
  });
});

router.post('/donate', (req, res) => {
  const user = req.session.user;
  axios.post('http://localhost:8080/green_travel/api/userDonate.action', {
    user_id: user.id,
    ...req.body,
  })
    .then((result) => {
      const { code, data } = result.data;
      const user = req.session.user;
      user.integral = data;
      console.log('publicWelfare donate result: ', result.data);
      res.json({ code });
    })
    .catch((e) => {
      console.log(e);
      res.json({ code: 1 });
    });
});

// "pw_id": 2342,
// "integral": 54.7,
// "name": "sky"

router.get('/rank', (req, res) => {
  axios.get('http://localhost:8080/green_travel/api/getDonate.action', {
    params: req.query,
  }).then((result) => {
    const { code, data } = result.data;
    console.log('publicWelfare rank result: ', code);
    res.json({
      code,
      data: data.map(item => ({
        id: item.pw_id,
        integral: item.integral,
        name: item.name,
      })),
    });
  }).catch((e) => {
    console.log(e);
    res.json({ code: 1 });
  });
});

module.exports = router;