import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../../styles/registerEvent.css';

const RegisterEvent = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/events/${id}/register`, formData);
      console.log('Registered for event:', response.data);
    } catch (error) {
      console.error('Failed to register for event:', error);
    }
  };

  return (
    <div className="register-event-container">
      <h2 className="register-event-heading">Register for Event</h2>
      <form className="register-event-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterEvent;
