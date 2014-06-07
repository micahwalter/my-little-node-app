// this uses the posts model to create a new post with some dummy content
var Post = require('./include/lib_posts');

exports.render = function(req, res){
	var post = new Post({ title: 'Hello World', content:"Welcome to your new app" });
	
	post.save(function (err) {
		if (err){
			res.send(err);
		}
		res.send(post);
	});
};