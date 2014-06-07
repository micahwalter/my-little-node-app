// This loads the posts model and returns all the posts with paged results
var Posts = require('./include/lib_posts');

exports.render = function(req, res) {
		
	if ( req.params['page'] ){
		page = req.params['page'];
	} else {
		page = 1;
	}
	
			
	Posts.findAll(req.params['page'], function(err, posts) {
		
		Posts.countAll(req.params['page'], function (err, count) {
			res.render('posts', {
				title: 'Posts',
				posts : posts,
				page : req.params['page'],
				count: count,
				next_page: parseInt(page) + 1,
				pages: Math.ceil(count / 10), // for now 10 per page...
	
			});
		});
	});
};