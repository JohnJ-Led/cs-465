var express = require('express');
var router = express.Router();
const controller = require('../contollers/trips');
/* GET home page. */

router
.route('/trips')
.get(controller.tripsList);

router
.route('/trips/:tripCode')
.get(controller.tripsFindByCode);

module.exports = router;

