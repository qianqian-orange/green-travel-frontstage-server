const { query } = require('../init/mysql');

function find(id) {
  return query('select * from user where id = ? limit 1', [id])
    .then((result) => {
      if (result.length === 0) return Promise.reject('用户不存在！');
      return result[0];
    })
    .catch(e => Promise.reject(e));
}

module.exports = {
  find,
};