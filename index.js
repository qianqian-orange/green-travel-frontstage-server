const express = require('express');
const axios = require('axios');
const favicon = require('serve-favicon');
const path = require('path');
const fs = require('fs');
const session = require('express-session');
const redisStore = require('connect-redis')(session);
const client = require('./init/redis');
require('./init/mysql');
const merchandiseRouter = require('./routes/merchandise');
const advertisementRouter = require('./routes/advertisement');

const app = express();

/* application/x-www-form-urlencoded */
app.use(express.urlencoded({ extended: false }));
/* application/json */
app.use(express.json());

/* session */
app.use(session({
  secret: 'green travel frontstage',
  resave: false,
  saveUninitialized: true,
  store: new redisStore({ client }),
}));

/* favicon */
app.use(favicon(path.join(__dirname, './public/favicon.ico')));

/* static */
app.use('/static/', express.static(path.join(__dirname, './public/static')));

app.use('/upload', (req, res) => {
  axios.get(`http://localhost:3000/upload${req.url}`, {
      responseType: 'arraybuffer',
    })
    .then((result) => {
      res.setHeader('Content-Type', `image/${req.url.split('.')[1]}`);
      res.send(result.data);
    });
});
app.use('/api/user', (req, res) => {
  const { user } = req.session;
  if (user) return res.json({ user });
  axios.get('http://localhost:3000/api/user')
    .then((result) => {
      req.session.user = result.data;
      return res.json({ user: result.data });
    });
});
app.use('/api/merchandise', merchandiseRouter);
app.use('/api/advertisement', advertisementRouter);

app.use((req, res) => {
  fs.readFile(path.join(__dirname, './public/index.html'), 'utf-8', (err, data) => {
    if (err) return res.send('server error!');
    res.setHeader('Content-Type', 'text/html');
    return res.send(data);
  });
});

app.listen(8000, () => {
  console.log('green travel backstage server started at port 8000!');
});