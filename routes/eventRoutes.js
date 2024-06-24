// routes/eventRoutes.js

const express = require('express');
const router = express.Router();
const { db } = require('../firebaseAdmin'); // Adjust the path as per your folder structure
const firebaseAuth = require('../middlewares/firebaseAuthMiddleware'); // Firebase Authentication middleware

// Firebase Firestore instance
const eventsCollection = db.collection('events');

// Route to create a new event (protected by Firebase Authentication)
router.post('/create', firebaseAuth, async (req, res) => {
  const { eventType, timestamp, location, ccNumber } = req.body;

  try {
    const newEvent = await eventsCollection.add({
      eventType,
      timestamp,
      location,
      ccNumber,
      createdBy: req.user.uid, // Example: Store user ID who created the event
    });

    res.status(201).send('Event created successfully');
  } catch (error) {
    console.error('Error creating event:', error);
    res.status(500).send('Error creating event');
  }
});

module.exports = router;
