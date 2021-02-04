const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Message Schema
const MessageSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	msg: {
		type: String,
		required: true,
	},
	isRead: {
		type: Boolean,
		default: false,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = Message = mongoose.model('message', MessageSchema);
