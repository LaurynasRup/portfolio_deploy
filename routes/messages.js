const express = require('express');
const router = express.Router();

// Message model
const Message = require('../Models/Message');

//Routes
// GET /messages
// Get all messages
// Public
router.get('/', (req, res) => {
	Message.find()
		.sort({ date: -1 })
		.then((messages) => res.json(messages));
});

//Routes
// POST /messages
// Create a message
// Public
router.post('/', (req, res) => {
	const newMessage = new Message({
		name: req.body.name,
		email: req.body.email,
		msg: req.body.msg,
	});
	newMessage.save().then((item) => res.status(200).send('Message sent'));
});

module.exports = router;
