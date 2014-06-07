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