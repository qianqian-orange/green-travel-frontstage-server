const express = require('express');
const taskController = require('../controller/TaskController');

const router = express.Router();

router.get('/list', (req, res) => {
  taskController.list(req, res);
});

router.get('/find', (req, res) => {
  taskController.find(req, res);
});

router.post('/acquire', (req, res) => {
  taskController.acquire(req, res);
});

module.exports = router;