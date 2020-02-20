const express = require('express');
const levelController = require('../controller/LevelController');

const router = express.Router();

router.get('/precents', (req, res) => {
  levelController.percents(req, res);
});

module.exports = router;