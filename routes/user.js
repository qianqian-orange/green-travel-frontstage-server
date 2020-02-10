const express = require('express');
const router = express.Router();

router.get('/user', (req, res) => {
  const user = req.session.user;
  res.json({ user });
});

module.exports = router;