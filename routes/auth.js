const express = require('express');
const axios = require('axios');
const { query } = require('../init/mysql');
const { GITHUB_OAUTH_URL, CLIENT_ID, CLIENT_SECRET } = require('../config/auth');
const router = express.Router();

async function save(req, res, user) {
  try {
    let result = await query('select * from user where id = ? limit 1', [user.id]);
    let target = result[0];
    if (!target) {
      target = {
        id: user.id,
        name: user.name,
        integral: 100,
      };
      await query('insert into user(id, name, integral) values(?, ?, ?)', [
        target.id,
        target.name,
        target.integral,
      ]);
    }
    req.session.user = target;
    const url = process.env.NODE_ENV === 'development' ? 'http://localhost:8001' : '/';
    res.redirect(url);
  } catch(e) {
    console.log(e);
    res.send('server error');
  };
}

router.get('/login', (req, res) => {
  return res.redirect(GITHUB_OAUTH_URL);
});

router.get('/logout', (req, res) => {
  req.session.user = null;
  return res.send();
});

router.get('/auth', async (req, res) => {
  const { code } = req.query;
  if (!code) {
    return res.send('the code is lost!');
  }
  let result = await axios.post('https://github.com/login/oauth/access_token', {
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    code,
  }, {
    headers: {
      Accept: 'application/json',
    },
  });
  if (result.status !== 200) return res.send('github auth fail!');
  if (result.data.error) return res.send('the code is expired!');
  const { token_type, access_token } = result.data;
  result = await axios.get('https://api.github.com/user', {
    headers: {
      Authorization: `${token_type} ${access_token}`,
    },
  });
  if (result.status !== 200) return res.send('get user information fail!');
  save(req, res, result.data);
});

module.exports = router;