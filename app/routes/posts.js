// you can put all your routes in here if you like.
var express = require('express');

module.exports = function(app){
	
	var router = express.Router();
		
	// Creates a new post
    var newPost = require('../newPost');
    router.get('/new', newPost.render);
	
	// Post route
    var post = require('../post');
    router.get('/:id', post.render);
	
	app.use('/post', router);
	
};