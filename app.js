// app.js

const express = require('express');
const bodyParser = require('body-parser');
const { admin } = require('./firebaseAdmin'); // Adjust path as per your folder structure
const firebaseAuthMiddleware = require('./middlewares/firebaseAuthMiddleware'); // Firebase Authentication middleware
const errorHandlerMiddleware = require('./middlewares/errorHandlerMiddleware'); // Error handling middleware
const authRoutes = require('./routes/authRoutes'); // Auth routes
const eventRoutes = require('./routes/eventRoutes'); // Event routes
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize Firebase Admin SDK
// Already initialized in firebaseAdmin.js

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes); // Auth routes
app.use('/api/events', firebaseAuthMiddleware, eventRoutes); // Event routes with Firebase Authentication middleware

// Error handling middleware
app.use(errorHandlerMiddleware);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
