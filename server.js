// load express, swig and mongoose
var express = require("express");
var swig  = require('swig');
var mongoose = require('mongoose');

// create an express app
var app = express();

// configure express to use swig
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/app/templates');

// public folder for static assets like css and js
app.use(express.static(__dirname + '/app/public'));

// turns off swig cache in dev mode 
// set this env variable on your server/heroku to use swig cache
if (!process.env.NODE_ENV){
	swig.setDefaults({ cache: false });
}

// connect to a mongodb via mongoose
var configDB = require('./config/database.js');
mongoose.connect(configDB.url);

// load the routes
require('./app/routes/routes')(app);
require('./app/routes/posts')(app);

// start the server
var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
	console.log("Listening on " + port);
});
