const express = require('express');
const signInController = require('../controller/SignInController');
const router = express.Router();

router.get('/data', (req, res) => {
  signInController.data(req, res);
});

router.post('/update', (req, res) => {
  signInController.update(req, res);
});

module.exports = router;