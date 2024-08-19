import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import '../../styles/eventDetails.css';

const EventDetail = () => {
  const { id } = useParams();
  const [event, setEvent] = useState({});

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`/api/events/${id}`);
        setEvent(response.data);
      } catch (error) {
        console.error('Failed to fetch event details:', error);
      }
    };
    fetchEvent();
  }, [id]);

  return (
    <div className="event-detail-container">
      <h2 className="event-detail-heading">{event.title}</h2>
      <p className="event-detail-description">{event.description}</p>
      <Link to={`/events/${id}/register`} className="event-detail-register-link">
        Register for this Event
      </Link>
    </div>
  );
};

export default EventDetail;
