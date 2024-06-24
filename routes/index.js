const express = require('express');
const authRoutes = require('./authRoutes');
const eventRoutes = require('./eventRoutes');
const vehicleInspectionRoutes = require('./vehicleInspectionRoutes');

const router = express.Router();

// Mounting routes
router.use('/auth', authRoutes);
router.use('/events', eventRoutes);
router.use('/vehicle-inspections', vehicleInspectionRoutes);

module.exports = router;
