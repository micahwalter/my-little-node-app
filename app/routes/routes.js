// you can put all your routes in here if you like.
var express = require('express');

module.exports = function(app){
	
	var router = express.Router();
	
	// Home route
    var index = require('../index');
    router.get('/', index.render);
	
	// Post route
    var post = require('../post');
    router.get('/post/:id', post.render);

	// Creates a new post
    var newPost = require('../newPost');
    router.get('/new', newPost.render);
	
	app.use('/', router);
	
};