const express = require('express');
const axios = require('axios');
const signInController = require('../controller/SignInController');
const router = express.Router();

// router.get('/data', (req, res) => {
//   signInController.data(req, res);
// });

// router.post('/update', (req, res) => {
//   signInController.update(req, res);
// });

router.get('/data', (req, res) => {
  const user = req.session.user;
  console.log(user.id);
  axios.get('http://localhost:8080/green_travel/api/defaultSignin.action', {
    params: {
      user_id: user.id,
      ...req.query,
    },
  }).then((result) => {
    const { code, data } = result.data;
    console.log('signIn data result: ', code, data);
    res.json({ code, data });
  }).catch((e) => {
    console.log(e);
    res.json({ code: 1 });
  });
});

router.post('/update', (req, res) => {
  const user = req.session.user;
  const { id } = req.body;
  axios.post('http://localhost:8080/green_travel/api/Signin.action', {
    user_id: user.id,
    id,
  }).then((result) => {
    const { code } = result.data;
    console.log('signIn update result: ', code);
    res.json({ code }); 
  }).catch((e) => {
    console.log(e);
    res.json({ code: 1 });
  });
});

module.exports = router;