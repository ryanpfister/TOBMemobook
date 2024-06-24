// src/components/Dashboard.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Example: Fetch user data on component mount
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/user'); // Adjust endpoint based on your backend setup
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setError('Error fetching user data');
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    // Example: Fetch events data on component mount
    const fetchEventsData = async () => {
      try {
        const response = await axios.get('/events'); // Adjust endpoint based on your backend setup
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events data:', error);
        setError('Error fetching events data');
      }
    };

    fetchEventsData();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {user && <p>Welcome, {user.username}!</p>}
      
      {/* Example: Display list of events */}
      <h3>Events:</h3>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <strong>{event.type}:</strong> {event.timestamp} - {event.location}
          </li>
        ))}
      </ul>

      {/* Add more sections and components as needed */}
    </div>
  );
};

export default Dashboard;
