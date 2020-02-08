const query = require('../init/mysql');
const Advertisement = require('../model/Advertisement');

function list() {
  return query('select * from advertisement where exist = 0 and status = 1')
    .then((result) => {
      const advertisementList = [];
      result.forEach((element) => {
        advertisementList.push(new Advertisement(element));
      });
      return advertisementList;
    })
    .catch(e => Promise.reject(e));
}

module.exports = {
  list,
};