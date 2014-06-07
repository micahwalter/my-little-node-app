// you can put all your routes in here if you like.
var express = require('express');

module.exports = function(app){
	
	var router = express.Router();
	
	// Home route
    var index = require('../index');
    router.get('/', index.render);
		
	app.use('/', router);
	
};