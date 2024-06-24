// app.js

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const MongoStore = require('connect-mongo')(session);
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB URI
const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://ryan:8JBUhlDBNjVVFxy9@memobook.cuovuit.mongodb.net/?retryWrites=true&w=majority&appName=MemoBook';
// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB connection established successfully');
});

// Define User schema and model
const User = require('./models/User'); // Create User model in models/User.js

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Session middleware
app.use(session({
  secret: 'fsdfasdfsadgretqewrtqwreter',
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Passport local strategy for authentication
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Example middleware to ensure authenticated users only
function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).send('Unauthorized');
}

// Routes
const routes = require('./routes/index');
app.use('/api', routes); // Mount all routes under /api base path

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
