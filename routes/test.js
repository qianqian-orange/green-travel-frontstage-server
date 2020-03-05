const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/user', (req, res) => {
  axios.post('http://59.110.174.204:7280/v1.0/api/app/user/getUserInfo', {
    user_id: '1',
    term_type: 0,
    term_token: '21123',
  }, {
    headers: {
      userId: '1',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  }).then((result) => {
    console.log1(1);
    res.json(result.data);
  }).catch(e => res.send(e));
});

router.get('/trip/baseTriplist', (req, res) => {
  axios.post('http://59.110.174.204:7280/v1.0/api/app/trip/baseTriplist', {
    // service_id: "1",
    // page_size: 100,
  }, {
    headers: {
      userId: 1,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  }).then((result) => {
    console.log(1);
    res.json(result.data);
  }).catch((e) => {
    console.log(2);
    res.send(e);
  });
});

router.get('/trip/getBaseTrip', (req, res) => {
  axios.post('http://59.110.174.204:7280/v1.0/api/app/trip/getBaseTrip', {
    trip_no: "2",
    service_id: "1",
    user_id: 1,
  }, {
    headers: {
      userId: 1,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  }).then((result) => {
    console.log(1);
    res.json(result.data);
  }).catch((e) => {
    console.log(2);
    res.send(e);
  });
});

router.get('/message/push', (req, res) => {
  axios.post('http://59.110.174.204:7280/v1.0/api/app/message/push', {
    msg_type: 4,
    // service_id: "1",
    // user_id: 1,
  }, {
    headers: {
      userId: 1,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  }).then((result) => {
    console.log(1);
    res.json(result.data);
  }).catch((e) => {
    console.log(2);
    res.send(e);
  });
});

module.exports = router;