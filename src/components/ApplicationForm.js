// 

import React, { useState } from 'react';
import axios from 'axios';
import './ApplicationForm.css'; // Importing CSS for styling
import { submitApplication } from '../services/api';

const ApplicationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(false); // Add loading state

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Show loader and disable button
    setLoading(true);
    
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('resume', resume);

    try {
      await submitApplication(formData);
      alert('Application submitted successfully!');
    } catch (error) {
      alert('Failed to submit the application.');
    } finally {
      // Hide loader and enable button again
      setLoading(false);
    }
  };

  return (
    <div className="application-form">
      <h2>Submit Your Resume!</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="resume">Resume (PDF)</label>
          <input
            type="file"
            id="resume"
            accept=".pdf"
            onChange={(e) => setResume(e.target.files[0])}
            required
          />
        </div>

        {/* Show loader when submitting */}
        {loading ? (
          <button type="submit" disabled>
            Submitting...
          </button>
        ) : (
          <button type="submit">Submit Application</button>
        )}
      </form>
    </div>
  );
};

export default ApplicationForm;
