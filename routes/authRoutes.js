// routes/authRoutes.js

const express = require('express');
const router = express.Router();
const { admin } = require('../firebaseAdmin'); // Adjust the path as per your folder structure
const firebaseAuth = require('../middlewares/firebaseAuthMiddleware'); // Firebase Authentication middleware

// Firebase Authentication instance
const auth = admin.auth();

// Route for user registration
router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    const userRecord = await auth.createUser({
      email,
      password,
    });
    res.status(201).json({ message: 'User registered successfully', uid: userRecord.uid });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Failed to register user' });
  }
});

// Route for user login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    await auth.signInWithEmailAndPassword(email, password);
    const user = await auth.currentUser;
    const token = await user.getIdToken();
    res.status(200).json({ token });
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

// Route for user logout
router.get('/logout', async (req, res) => {
  try {
    const token = req.headers.authorization.split('Bearer ')[1];
    await auth.revokeRefreshTokens(token);
    res.status(200).json({ message: 'Logged out successfully' });
  } catch (error) {
    console.error('Error logging out user:', error);
    res.status(500).json({ error: 'Failed to logout user' });
  }
});

// Route for getting user profile information
router.get('/profile', firebaseAuth, async (req, res) => {
  try {
    const { uid } = req.user;
    const userRecord = await auth.getUser(uid);
    res.status(200).json({ user: userRecord });
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ error: 'Failed to fetch user profile' });
  }
});

module.exports = router;
