var express = require('express');
var router = express.Router();
const scheduleController = require('../controllers/schedule');

router.get('/schedule', function (req, res) {
  console.log('ON GET FILE');
  scheduleController.schedule_getData(req, res);
});

router.post('/schedule', async function (req, res) {
  scheduleController.schedule_saveFile(req, res);
});

module.exports = router;
