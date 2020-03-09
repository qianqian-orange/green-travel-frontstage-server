const Pagination = require('../model/Pagination');
const taskService = require('../service/TaskService');

function list(req, res) {
  const pagination = new Pagination(req.query);
  taskService
    .list({ pagination })
    .then(data => res.json({ code: 0, data }))
    .catch((e) => {
      console.log(e);
      res.json({ code: 1 });
    });
}

function find(req, res) {
  const { id } = req.query;
  taskService
    .find(id)
    .then((data) => res.json({ code: 0, data }))
    .catch((e) => {
      console.log(e);
      res.json({ code: 1 });
    });
}

function acquire(req, res) {
  const { id } = req.body;
  const user = req.session.user;
  taskService
    .acquire({ user, task_id: id })
    .then((data) => {
      const target = {
        ...data,
        status: 0,
        acquire: 0,
      };
      const user = req.session.user;
      user.tasks.push(target);
      res.json({ code: 0, data: target });
    })
    .catch((e) => {
      console.log(e);
      res.json({ code: 1 });
    });
}

module.exports = {
  list,
  find,
  acquire,
};