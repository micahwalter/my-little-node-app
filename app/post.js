var Post = require('./include/lib_posts');

exports.render = function(req, res) {
	Post.findByID(req.params['id'], function (err, post) {
		res.render('post', {
			post : post,
		});
	});	
};