// you can put all your routes in here if you like.

module.exports = function(app){
	
	// Home route
    var index = require('../index');
    app.get('/', index.render);
	
	// Post route
    var post = require('../post');
    app.get('/post/:id', post.render);

	// Creates a new post
    var newPost = require('../newPost');
    app.get('/new', newPost.render);
	
	
};