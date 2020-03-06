const { query } = require('../init/mysql');

function find(id) {
  return query('select * from coupon where id = ? and exist = 0 limit 1', [id])
    .then((result) => {
      if (result.length === 0) return Promise.reject('没有此优惠卷！');
      return result[0];
    })
    .catch(e => Promise.reject(e));
}

module.exports = {
  find,
};