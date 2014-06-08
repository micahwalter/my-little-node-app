// logs out and returns to home

exports.render = function(req, res) {
	req.logout();
	res.redirect('/');
};
