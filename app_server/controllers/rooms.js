var fs = require('fs');

var room = JSON.parse(fs.readFileSync('./data/rooms.json'));

/* GET Travel Page */
const rooms = (req, res) => {
    res.render('rooms', { title: 'Travlr Getawys', room});
}

module.exports = {
    rooms
};