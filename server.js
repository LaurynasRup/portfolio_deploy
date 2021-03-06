const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Require routes file
const messages = require('./routes/messages');

// Connect to DB
mongoose.connect(
	process.env.DB_CONNECT,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => {
		console.log('DB connected');
	}
);

// Redirect to https
app.use((req, res, next) => {
	if (req.header('x-forwarded-proto') !== 'https') {
		res.redirect(`https://${req.header('host')}${req.url}`);
	} else {
		next();
	}
});

// Use routes
app.use('/messages', messages);

// serve static assets if in production
if (process.env.NODE_ENV === 'production') {
	// set static folder
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

const port = process.env.PORT || 5000;

// Run Server
app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
