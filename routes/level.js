const express = require('express');
const axios = require('axios');
const levelController = require('../controller/LevelController');

const router = express.Router();

router.get('/percents', (req, res) => {
  levelController.percents(req, res);
});

// router.get('/percents', (req, res) => {
//   axios.get('http://localhost:8080/green_travel/api/getAllLevel.action')
//     .then((result) => {
//       const { code, data } = result.data;
//       console.log('level percents result: ', code, data);
//       res.json({ code, data });
//     }).catch((e) => {
//       console.log(e);
//       res.json({ code: 1 });
//     });
// });

module.exports = router;