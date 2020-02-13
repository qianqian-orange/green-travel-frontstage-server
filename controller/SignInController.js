const SignIn = require('../model/SignIn');
const signInService = require('../service/SignInService');

function data(req, res) {
  const user = req.session.user;
  const signIn = new SignIn({ ...req.query, user_id: user.id });
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
  const signIn = new SignIn(req.body);
  const { integral } = req.body;
  signInService
    .update({ ...signIn, integral, user })
    .then(() => res.json({ code: 0 }))
    .catch((e) => {
      console.log(e);
      res.json({ code: 1 });
    });
}

module.exports = {
  data,
  update,
};