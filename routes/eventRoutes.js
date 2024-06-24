// routes/eventRoutes.js

const express = require('express');
const router = express.Router();
const isAuthenticated = require('../middlewares/authMiddleware');
const validate = require('../middlewares/validationMiddleware');
const { body } = require('express-validator');

// Example Event Model
const Event = require('../models/Event');

// Route to create a new event
router.post('/create', isAuthenticated, [
  body('eventType').notEmpty().isString(),
  body('timestamp').notEmpty().isISO8601(),
  body('location').notEmpty().isString(),
  body('ccNumber').notEmpty().isString(),
  validate,
], (req, res) => {
  const { eventType, timestamp, location, ccNumber } = req.body;

  const newEvent = new Event({
    eventType,
    timestamp,
    location,
    ccNumber,
  });

  newEvent.save()
    .then(() => {
      res.status(201).send('Event created successfully');
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Error creating event');
    });
});

module.exports = router;
