/* GET Homepage */
const index = (req, res) => {
    res.render('index', { title: 'Travlr Getawys'});
}

module.exports = {
    index
};