const Pagination = require('../model/Pagination');
const Conversion = require('../model/Conversion');
const merchandiseService = require('../service/MerchandiseService');
const lock = require('../lock');
const { MERCHANDISE_CONVERSION } = require('../config/lock');

class Condition {
  constructor({
    name = '',
  }) {
    this.name = name;
  }
}

function list(req, res) {
  const pagination = new Pagination(req.query);
  const condition = new Condition(req.query);
  merchandiseService
    .list({
      pagination,
      condition,
    })
    .then(result => res.json({ code: 0, data: result }))
    .catch((e) => {
      console.log(e);
      res.json({ code: 1 });
    });
}

function total(req, res) {
  const condition = new Condition(req.query);
  merchandiseService
    .total(condition)
    .then(result => res.json({ code: 0, data: result }))
    .catch((e) => {
      console.log(e);
      res.json({ code: 1 });
    });
}

function find(req, res) {
  const { id } = req.query;
  merchandiseService
    .find(id)
    .then(result => res.json({ code: 0, data: result }))
    .catch((e) => {
      console.log(e);
      res.json({ code: 1 });
    });
}

function conversion(req, res) {
  const { id, uc_id } = req.body;
  const user = req.session.user;
  if (lock[`${MERCHANDISE_CONVERSION}-${user.id}`]) return res.json({ code: 1 });
  lock[`${MERCHANDISE_CONVERSION}-${user.id}`] = true;
  const target = new Conversion({
    quantity: 1,
    merchandise_id: id,
    user_id: user.id,
    create_time: new Date(),
  });
  merchandiseService
    .conversion({
      ...target,
      uc_id,
    })
    .then((integral) => {
      user.integral = integral;
      res.json({ code: 0 });
    })
    .catch((e) => {
      console.log(e);
      res.json({ code: 1 });
    })
    .finally(() => {
      delete lock[`${MERCHANDISE_CONVERSION}-${user.id}`];
    });
}

module.exports = {
  list,
  total,
  find,
  conversion,
};