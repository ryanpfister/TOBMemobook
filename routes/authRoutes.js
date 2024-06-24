// routes/authRoutes.js

const express = require('express');
const passport = require('passport');
const User = require('../models/User');

const router = express.Router();

// Route for registering a new user
router.post('/register', (req, res) => {
  const { username, password } = req.body;
  User.register(new User({ username }), password, (err, user) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error registering user');
    }
    passport.authenticate('local')(req, res, () => {
      res.send('User registered successfully');
    });
  });
});

// Route for user login
router.post('/login', passport.authenticate('local'), (req, res) => {
  res.send('Login successful');
});

// Route for user logout
router.get('/logout', (req, res) => {
  req.logout();
  res.send('Logged out successfully');
});

// Route for authenticated user profile
router.get('/profile', isAuthenticated, (req, res) => {
  res.send(`Welcome ${req.user.username}`);
});

module.exports = router;
