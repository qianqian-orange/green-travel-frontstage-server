const Pagination = require('../model/Pagination');
const Conversion = require('../model/Conversion');
const merchandiseService = require('../service/MerchandiseService');
const lock = require('../lock');
const {
  MERCHANDISE_CONVERSION,
  MERCHANDISE_LIST,
  MERCHANDISE_TOTAL,
  MERCHANDISE_FIND,
} = require('../config/lock');

class Condition {
  constructor({
    name = '',
  }) {
    this.name = name;
  }
}

function list(req, res) {
  const user = req.session.user;
  if (lock[`${MERCHANDISE_LIST}-${user.id}`]) return res.json({ code: 1 });
  lock[`${MERCHANDISE_LIST}-${user.id}`] = true;
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
    })
    .finally(() => {
      delete lock[`${MERCHANDISE_LIST}-${user.id}`];
    });
}

function total(req, res) {
  const user = req.session.user;
  if (lock[`${MERCHANDISE_TOTAL}-${user.id}`]) return res.json({ code: 1 });
  lock[`${MERCHANDISE_TOTAL}-${user.id}`] = true;
  const condition = new Condition(req.query);
  merchandiseService
    .total(condition)
    .then(result => res.json({ code: 0, data: result }))
    .catch((e) => {
      console.log(e);
      res.json({ code: 1 });
    })
    .finally(() => {
      delete lock[`${MERCHANDISE_TOTAL}-${user.id}`];
    });
}

function find(req, res) {
  const user = req.session.user;
  if (lock[`${MERCHANDISE_FIND}-${user.id}`]) return res.json({ code: 1 });
  lock[`${MERCHANDISE_FIND}-${user.id}`] = true;
  const { id } = req.query;
  merchandiseService
    .find(id)
    .then(result => res.json({ code: 0, data: result }))
    .catch((e) => {
      console.log(e);
      res.json({ code: 1 });
    })
    .finally(() => {
      delete lock[`${MERCHANDISE_FIND}-${user.id}`];
    });
}

function conversion(req, res) {
  const { id } = req.body;
  const user = req.session.user;
  if (lock[`${MERCHANDISE_CONVERSION}-${user.id}`]) return res.json({ code: 1 });
  lock[`${MERCHANDISE_CONVERSION}-${user.id}`] = true;
  const c = new Conversion({
    quantity: 1,
    merchandise_id: id,
    user_id: user.id,
    create_time: new Date(),
  });
  merchandiseService
    .conversion(c)
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