// src/components/EventForm.jsx

import React, { useState } from 'react';
import axios from 'axios';

const EventForm = () => {
  const [eventType, setEventType] = useState('');
  const [timestamp, setTimestamp] = useState('');
  const [location, setLocation] = useState('');
  const [ccNumber, setCcNumber] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('/events', {
        eventType,
        timestamp,
        location,
        ccNumber
      });
      console.log(response.data); // Handle success response
      // Optionally, clear form fields or show success message
    } catch (error) {
      console.error('Event creation error:', error);
      setError('Failed to create event. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Event</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <label>Event Type:</label>
        <input type="text" value={eventType} onChange={(e) => setEventType(e.target.value)} required />
      </div>
      <div>
        <label>Timestamp:</label>
        <input type="datetime-local" value={timestamp} onChange={(e) => setTimestamp(e.target.value)} required />
      </div>
      <div>
        <label>Location:</label>
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
      </div>
      <div>
        <label>CC Number:</label>
        <input type="text" value={ccNumber} onChange={(e) => setCcNumber(e.target.value)} />
      </div>
      <button type="submit">Create Event</button>
    </form>
  );
};

export default EventForm;
