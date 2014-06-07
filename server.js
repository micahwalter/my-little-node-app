var express = require("express");
var swig  = require('swig');
var mongoose = require('mongoose');

var app = express();

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/app/templates');
app.use(express.static(__dirname + '/app/public'));

if (!process.env.NODE_ENV){
	swig.setDefaults({ cache: false });
}

var configDB = require('./config/database.js');
mongoose.connect(configDB.url);



require('./app/routes/routes')(app);

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
	console.log("Listening on " + port);
});
