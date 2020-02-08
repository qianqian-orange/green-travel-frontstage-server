const express = require('express');
const advertisementController = require('../controller/AdvertisementController');

const router = express.Router();

router.get('/list', (req, res) => {
  advertisementController.list(req, res);
});

module.exports = router;