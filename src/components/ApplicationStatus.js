import React, { useState } from 'react';
import axios from 'axios';
import './ApplicationStatus.css'; // Importing CSS for styling

const ApplicationStatus = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);

  const checkStatus = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/status/${email}`);
      setStatus(response.data.status);
    } catch (error) {
      alert('Error retrieving status');
    }
  };

  return (
    <div className="application-status">
      <h2>Check Application Status</h2>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button onClick={checkStatus}>Check Status</button>
      {status && <p>Status: {status}</p>}
    </div>
  );
};

export default ApplicationStatus;
