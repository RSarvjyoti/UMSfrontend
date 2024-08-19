import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/profile.css';
import { api_url } from '../../axios';

const Profile = () => {
  const [profile, setProfile] = useState({});
  
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token'); 
        
        // Ensure token exists before making request
        if (!token) {
          console.error('No token found');
          return;
        }

        const response = await axios.get(`${api_url}/api/users/me`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setProfile(response.data);
      } catch (error) {
        console.error('Failed to fetch profile:', error.response ? error.response.data : error.message);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="profile-container">
      <h2 className="profile-heading">My Profile</h2>
      {profile.profilePicture && (
        <img src={profile.profilePicture} alt="Profile" className="profile-image" />
      )}
      <p className="profile-info">Name: {profile.name || 'N/A'}</p>
      <p className="profile-info">Email: {profile.email || 'N/A'}</p>
    </div>
  );
};

export default Profile;
