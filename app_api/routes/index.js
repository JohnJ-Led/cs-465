var express = require('express');
var router = express.Router();
//const authController = require('../contollers/authentication');
const controller = require('../contollers/trips');

/* GET home page. */
/*router
.route('/login')
.post(authController.login);

router
.route('/register')
.post(authController.register);
*/

router
.route('/trips')
.get(controller.tripsList)
.post(controller.tripsAddTrip);

router
.route('/trips/:tripCode')
.get(controller.tripsFindByCode)
.put(controller.tripsUpdateTrip);


module.exports = router;

