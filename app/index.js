// just a home page

exports.render = function(req, res) {
    res.render('index', {
    	title: 'Home'
    });
};
