const express = require('express');
const router = express.Router();
const Appointment=require('../models/Appointment')
const dayjs = require('dayjs');


// POST endpoint to create a new appointment
router.post('/', async (req, res) => {
  try {
    const { fullName, contact, date, time, notes } = req.body;

    // Create a new appointment document
    const appointment = new Appointment({ fullName, contact, date, time, notes });

    // Save the appointment to the database
    await appointment.save();

    res.status(201).json({ message: 'Appointment created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating appointment' });
  }
});
  module.exports = router;