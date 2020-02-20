const SignIn = require('../model/SignIn');
const signInService = require('../service/SignInService');
const lock = require('../lock');
const { SIGNIN_UPDATE } = require('../config/lock');

function data(req, res) {
  const date = new Date();
  const user = req.session.user;
  const signIn = new SignIn({ year: date.getFullYear(), month: date.getMonth() + 1, user_id: user.id });
  signInService
    .data(signIn)
    .then(result => res.json({ code: 0, data: result }))
    .catch((e) => {
      console.log(e);
      res.json({ code: 1 });
    });
}

function update(req, res) {
  const user = req.session.user;
  if (lock[`${SIGNIN_UPDATE}-${user.id}`]) return res.json({ code: 1 });
  lock[`${SIGNIN_UPDATE}-${user.id}`] = true;
  const { id } = req.body;
  signInService
    .update({ id, user_id: user.id })
    .then((value) => {
      user.integral = value;
      res.json({ code: 0 })
    })
    .catch((e) => {
      console.log(e);
      res.json({ code: 1 });
    })
    .finally(() => {
      delete lock[`${SIGNIN_UPDATE}-${user.id}`];
    });
}

module.exports = {
  data,
  update,
};