const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;
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

// Use routes
app.use('/messages', messages);

// Run Server
app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
