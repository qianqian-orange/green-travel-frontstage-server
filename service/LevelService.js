const { query } = require('../init/mysql');

function percents() {
  return query('select count(1) total, lv from level group by lv')
    .then((result) => {
      const sum = result.reduce((pre, cur) => {
        return pre + cur.total;
      }, 0);
      const percents = [];
      for (let i = 0; i < 15; i += 1) {
        percents.push(0);
      }
      return result.reduce((pre, cur) => {
        pre[cur.lv - 1] = parseFloat((cur.total / sum).toFixed(5));
        return pre;
      }, percents);
    })
    .catch(e => Promise.reject(e));
}

module.exports = {
  percents,
};