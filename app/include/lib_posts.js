// This is a sample model for posts

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

// data model for an article
var PostSchema = new Schema({
	created: {
	    type: Date,
	    default: Date.now
	},
	title: {
	    type: String,
	    default: '',
	    trim: true
	},
	content: {
	    type: String,
	    default: '',
	    trim: true
	},
});

// ************************************************************** //

// this looks up a post by ID
PostSchema.statics.findByID = function findByID(id, cb, err) {
	this.findOne({ '_id': id }).exec(cb);
}

// this looks up all the posts and returns paged results
PostSchema.statics.findAll = function findAll(page, cb, err) {
	this.find().sort({'created':-1}).skip(10*(page-1)).limit(10).exec(cb);  
}

PostSchema.statics.countAll = function countAll(page, cb, err){
	this.count().exec(cb);
}

module.exports = mongoose.model('Post', PostSchema);