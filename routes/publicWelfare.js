const express = require('express');
const publicWelfareController = require('../controller/PublicWelfareController');

const router = express.Router();

router.post('/save', (req, res) => {
  publicWelfareController.save(req, res);
});

router.get('/list', (req, res) => {
  publicWelfareController.list(req, res);
});

router.get('/total', (req, res) => {
  publicWelfareController.total(req, res);
});

router.get('/find', (req, res) => {
  publicWelfareController.find(req, res);
});

router.post('/donate', (req, res) => {
  publicWelfareController.donate(req, res);
});

router.get('/rank', (req, res) => {
  publicWelfareController.rank(req, res);
});

module.exports = router;