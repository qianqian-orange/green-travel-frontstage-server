const express = require('express');
const merchandiseController = require('../controller/MerchandiseController');
const router = express.Router();

router.get('/list', (req, res) => {
  merchandiseController.list(req, res);
});

router.get('/total', (req, res) => {
  merchandiseController.total(req, res);
});

router.get('/find', (req, res) => {
  merchandiseController.find(req, res);
});

module.exports = router;