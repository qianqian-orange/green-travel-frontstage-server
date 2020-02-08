const Pagination = require('../model/Pagination');
const merchandiseService = require('../service/MerchandiseService');

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

module.exports = {
  list,
  total,
  find,
};