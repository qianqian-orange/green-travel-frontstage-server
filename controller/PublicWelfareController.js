const publicWelfareService = require('../service/PublicWelfareService');
const PublicWelfare = require('../model/PublicWelfare');
const Pagination = require('../model/Pagination');
const lock = require('../lock');
const { PUBLIC_WELFARE_DONATE } = require('../config/lock');

function save(req, res) {
  const user = req.session.user;
  const publicWelfare = new PublicWelfare(req.body);
  publicWelfare.user_id = user.id;
  publicWelfareService
    .save(publicWelfare)
    .then(() => res.json({ code: 0 }))
    .catch((e) => {
      console.log(e);
      res.json({ code: 1 });
    });
}

function list(req, res) {
  const pagination = new Pagination(req.query);
  publicWelfareService
    .list({ pagination })
    .then(data => res.json({ code: 0, data }))
    .catch((e) => {
      console.log(e);
      res.json({ code: 1 });
    });
}

function total(req, res) {
  publicWelfareService
    .total()
    .then(data => res.json({ code: 0, data }))
    .catch((e) => {
      console.log(e);
      res.json({ code: 1 });
    });
}

function find(req, res) {
  const { id } = req.query;
  publicWelfareService
    .find(id)
    .then(data => res.json({ code: 0, data }))
    .catch((e) => {
      console.log(e);
      res.json({ code : 1 });
    });
};

function donate(req, res) {
  const { id, integral } = req.body;
  const user = req.session.user;
  if (lock[`${PUBLIC_WELFARE_DONATE}-${user.id}`]) return res.json({ code: 1 });
  lock[`${PUBLIC_WELFARE_DONATE}-${user.id}`] = true;
  publicWelfareService
    .donate({ id, integral, user_id: user.id })
    .then((integral) => {
      user.integral = integral;
      res.json({ code: 0 });
    })
    .catch((e) => {
      console.log(e);
      res.json({ code: 1 });
    })
    .finally(() => {
      delete lock[`${PUBLIC_WELFARE_DONATE}-${user.id}`];
    });
}

function rank(req, res) {
  const { id } = req.query;
  const pagination = new Pagination(req.query);
  publicWelfareService
    .rank({ id, pagination })
    .then(data => res.json({ code: 0, data }))
    .catch((e) => {
      console.log(e);
      res.json({ code: 1 });
    });
}

module.exports = {
  save,
  list,
  total,
  find,
  donate,
  rank,
};