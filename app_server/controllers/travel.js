var fs = require('fs');

var trips = JSON.parse(fs.readFileSync('./data/trips.json'));

/* GET Travel Page */
const travel = (req, res) => {
    res.render('travel', { title: 'Travlr Getawys', trips});
}

module.exports = {
    travel
};