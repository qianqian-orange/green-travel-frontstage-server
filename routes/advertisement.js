const express = require('express');
const Advertisement = require('../model/Advertisement');
const axios = require('axios');
const advertisementController = require('../controller/AdvertisementController');

const router = express.Router();

// router.get('/list', (req, res) => {
//   advertisementController.list(req, res);
// });

router.get('/list', (req, res) => {
  axios.get('http://localhost:8080/green_travel/api/getAllAdvertisement.action')
    .then((result) => {
      const { code, data } = result.data;
      res.json({
        code,
        data: data.map(item => new Advertisement({
          id: item.ad_id,
          path: item.ad_path,
          outside_link: item.ad_link,
        })),
      });
    }).catch((e) => {
      console.log(e);
      res.json({ code: 1 });
    });
});

module.exports = router;