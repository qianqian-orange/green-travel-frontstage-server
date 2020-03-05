const express = require('express');
const userController = require('../controller/UserController');

const router = express.Router();

router.get('/publicWelfareList', (req, res) => {
  userController.publicWelfareList(req, res);
});

router.get('/publicWelfareDetail', (req, res) => {
  userController.publicWelfareDetail(req, res);
});

router.get('/couponList', (req, res) => {
  userController.couponList(req, res);
});

router.get('/taskList', (req, res) => {
  userController.taskList(req, res);
});

router.post('/taskCheck', (req, res) => {
  userController.taskCheck(req, res);
});

router.post('/taskAcquire', (req, res) => {
  userController.taskAcquire(req, res);
});

module.exports = router;