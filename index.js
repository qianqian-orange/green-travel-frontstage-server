const express = require('express');
const axios = require('axios');
const favicon = require('serve-favicon');
const path = require('path');
const fs = require('fs');
const session = require('express-session');
const redisStore = require('connect-redis')(session);
const client = require('./init/redis');
require('./init/mysql');
require('./init/schedule');
const merchandiseRouter = require('./routes/merchandise');
const advertisementRouter = require('./routes/advertisement');
const signInRouter = require('./routes/signIn');
const levelRouter = require('./routes/level');
const publicWelfareRouter = require('./routes/publicWelfare');
const taskRouter = require('./routes/task');
const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');

const app = express();

/* favicon */
app.use(favicon(path.join(__dirname, './public/favicon.ico')));
/* static */
app.use('/user/static/', express.static(path.join(__dirname, './public/static')));

/* application/x-www-form-urlencoded */
app.use(express.urlencoded({ extended: false }));
/* application/json */
app.use(express.json());

/* session */
app.use(session({
  cookie: {
    sameSite: true, // will set the SameSite attribute to Strict for strict same site enforcement
    // secure: 如果设置为true,那么只能是https请求
  },
  secret: 'green travel frontstage',
  resave: false,
  saveUninitialized: true,
  store: new redisStore({ client }),
}));

app.use((req, res, next) => {
  console.log('test');
  next();
});

app.use('/upload', (req, res) => {
  axios.get(`http://localhost:3000/upload${req.url}`, {
    responseType: 'arraybuffer',
  })
    .then((result) => {
      res.setHeader('Content-Type', `image/${req.url.split('.')[1]}`);
      res.send(result.data);
    });
});

app.use('/user/api/user/detail', (req, res) => {
  const user = req.session.user;
  res.json({ user });
});

app.use('/user/api', authRouter);
app.use('/user/api', (req, res, next) => {
  const user = req.session.user;
  if (!user) return res.send('you can\'t do anything without login！');
  next();
});
app.use('/user/api/user', userRouter);
app.use('/user/api/merchandise', merchandiseRouter);
app.use('/user/api/advertisement', advertisementRouter);
app.use('/user/api/signIn', signInRouter);
app.use('/user/api/level', levelRouter);
app.use('/user/api/publicWelfare', publicWelfareRouter);
app.use('/user/api/task', taskRouter);

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