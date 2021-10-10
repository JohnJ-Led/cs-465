var express = require('express');
var router = express.Router();
const controller = require('../contollers/trips');
const authConroller = require('../contollers/authentication');

/* GET home page. */

router
.route('/trips')
.get(controller.tripsList)
.post(controller.tripsAddTrip);

router
.route('/trips/:tripCode')
.get(controller.tripsFindByCode)
.put(controller.tripsUpdateTrip);

router
.route('/login')
.post(authConroller.login);

router
.route('/register')
.post(authConroller.register);

module.exports = router;

