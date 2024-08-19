import React, { useState } from 'react';
import axios from 'axios';
import '../../styles/login.css';
import { Link, useNavigate } from 'react-router-dom';
import { api_url } from '../../axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post(`${api_url}/api/auth/login`, { email, password });
      console.log('Login successful:', response.data);

      // Store token in localStorage (or any preferred method)
      localStorage.setItem('token', response.data.token);

      // Redirect to the dashboard or home page
      navigate('/profile'); // Adjust as necessary

      // Clear form fields
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Login failed:', error);
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-heading">Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        {error && <p className="error-message">{error}</p>}
        <Link to="/register">Register</Link>
      </form>
    </div>
  );
};

export default Login;
