const express = require('express');
const axios = require('axios');
const Merchandise = require('../model/Merchaindise');
const merchandiseController = require('../controller/MerchandiseController');
const router = express.Router();

router.get('/list', (req, res) => {
  merchandiseController.list(req, res);
});

router.get('/total', (req, res) => {
  merchandiseController.total(req, res);
});

router.get('/find', (req, res) => {
  merchandiseController.find(req, res);
});

router.post('/conversion', (req, res) => {
  merchandiseController.conversion(req, res);
});

// router.get('/list', (req, res) => {
//   axios.get('http://localhost:8080/green_travel/api/likeCommodity.action', {
//     params: req.query,
//   }).then((result) => {
//     const { code, data } = result.data;
//     res.json({
//       code,
//       data: data.map(item => new Merchandise({
//         id: item.com_id,
//         name: item.com_name,
//         description: item.com_intro,
//         integral: item.com_value,
//         path: item.com_image,
//         create_time: item.create_time,
//         exist: item.exist,
//         stock: item.com_stock,
//         status: item.status,
//       })),
//     });
//   }).catch((e) => {
//     console.log(e);
//     res.json({ code : 1 });
//   });
// });

// router.get('/total', (req, res) => {
//   axios.get('http://localhost:8080/green_travel/api/totalCommodity.action', {
//     params: req.query,
//   }).then((result) => {
//     const { code, data } = result.data;
//     res.json({ code, data });
//   }).catch((e) => {
//     console.log(e);
//     res.json({ code : 1 });
//   });
// });

// router.get('/find', (req, res) => {
//   axios.get('http://localhost:8080/green_travel/api/getCommodityByid.action', {
//     params: req.query,
//   }).then((result) => {
//     const { code, data } = result.data;
//     res.json({
//       code,
//       data: new Merchandise({
//         id: data.com_id,
//         name: data.com_name,
//         description: data.com_intro,
//         integral: data.com_value,
//         path: data.com_image,
//         create_time: data.create_time,
//         exist: data.exist,
//         stock: data.com_stock,
//         status: data.status,
//       }),
//     });
//   }).catch((e) => {
//     console.log(e);
//     res.json({ code: 1 });
//   });
// });

module.exports = router;