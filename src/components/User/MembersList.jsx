import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/memberList.css';
import { api_url } from '../../axios';

const MembersList = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get(`${api_url}/api/users`);
        setMembers(response.data);
      } catch (error) {
        console.error('Failed to fetch members:', error);
      }
    };
    fetchMembers();
  }, []);

  return (
    <div className="members-container">
      <h2 className="members-heading">Community Members</h2>
      <table className="members-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Profile Picture</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member._id}>
              <td>{member.name}</td>
              <td>{member.email}</td>
              <td><img src={member.profilePicture} alt={member.name} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MembersList;
