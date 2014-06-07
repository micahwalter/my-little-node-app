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

PostSchema.statics.findByID = function findByID(id, cb, err) {
	this.findOne({ '_id': id }).exec(cb);
}

module.exports = mongoose.model('Post', PostSchema);