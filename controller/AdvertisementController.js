const advertisementService = require('../service/AdvertisementService');

function list(req, res) {
  advertisementService
    .list()
    .then(result => res.json({ code: 0, data: result }))
    .catch((e) => {
      console.log(e);
      res.json({ code: 1 });
    });
}

module.exports = {
  list,
};