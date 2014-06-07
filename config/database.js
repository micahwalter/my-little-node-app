// this either loads a localhost db called myapp or a mongohq db
// you can change the name of the db to whatever you want
// you can also change the mongohq thig to whatever your hosted db is called

if (process.env.MONGOHQ_URL) {
	module.exports = {
		'url' : process.env.MONGOHQ_URL
	};
} else {
	module.exports = {
		'url' : 'mongodb://localhost/myapp'
	};
}
