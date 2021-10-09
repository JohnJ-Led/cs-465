var express = require('express');
var router = express.Router();
const controller = require('../contollers/trips');
/* GET home page. */

router
.route('/trips')
.get(controller.tripsList)
.post(controller.tripsAddTrip);

router
.route('/trips/:tripCode')
.get(controller.tripsFindByCode)
.put(controller.tripsUpdateTrip);

module.exports = router;

