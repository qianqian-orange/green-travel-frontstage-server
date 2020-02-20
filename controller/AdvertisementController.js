const advertisementService = require('../service/AdvertisementService');
const { ADVERTISEMENT_LIST } = require('../config/lock');
const lock = require('../lock');

function list(req, res) {
  const user = req.session.user;
  if (lock[`${ADVERTISEMENT_LIST}-${user.id}`]) return res.json({ code: 1 });
  lock[`${ADVERTISEMENT_LIST}-${user.id}`] = true;
  advertisementService
    .list()
    .then(result => res.json({ code: 0, data: result }))
    .catch((e) => {
      console.log(e);
      res.json({ code: 1 });
    })
    .finally(() => {
      delete lock[`${ADVERTISEMENT_LIST}-${user.id}`];
    });
}

module.exports = {
  list,
};