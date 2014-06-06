module.exports = function(app){
	
	// Home route
    var index = require('../index');
    app.get('/', index.render);
	
};