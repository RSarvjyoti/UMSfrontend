import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../styles/eventList.css';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('/api/events');
        setEvents(response.data);
      } catch (error) {
        console.error('Failed to fetch events:', error);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div className="event-list-container">
      <h2 className="event-list-heading">Upcoming Events</h2>
      <Link to="/events/create" className="create-event-link">
        Create New Event
      </Link>
      <ul className="event-list">
        {events.map((event) => (
          <li key={event._id} className="event-list-item">
            <Link to={`/events/${event._id}`}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
