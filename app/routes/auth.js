// auth related routes
var express = require('express');

module.exports = function(app, passport){
	
	var router = express.Router();
	
	// Login
    // var login = require('../login');
    // router.get('/login', login.render);
		
	// logout
    var logout = require('../logout');
    router.get('/logout', logout.render);
		
	// sign up
    // var signup = require('../signup');
    // router.get('/signup', signup.render);
	
	app.use('/', router);
	
};