var express = require("express");
var swig  = require('swig');

var app = express();

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/app/templates');
app.use(express.static(__dirname + '/app/public'));

if (!process.env.NODE_ENV){
	swig.setDefaults({ cache: false });
}

require('./app/routes/routes')(app);

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
	console.log("Listening on " + port);
});
