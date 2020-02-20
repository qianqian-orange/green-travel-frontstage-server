const levelService = require('../service/LevelService');

function percents(req, res) {
  levelService
    .percents()
    .then((result) => res.json({ code: 0, data: result }))
    .catch((e) => {
      console.log(e);
      res.json({ code: 1 });
    });
}

module.exports = {
  percents,
};