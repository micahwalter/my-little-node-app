// you can put all your routes in here if you like.
var express = require('express');

module.exports = function(app){
	
	var router = express.Router();
	
	// General routes
    var index = require('../index');
    router.get('/', index.render);

    var about = require('../about');
    router.get('/about', about.render);

    var contact = require('../contact');
    router.get('/contact', contact.render);
	
		
	app.use('/', router);
	
};