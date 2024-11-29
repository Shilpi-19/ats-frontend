import React, { useState } from 'react';
import axios from 'axios';
import './ApplicationForm.css'; // Importing CSS for styling
import { submitApplication } from '../services/api';

const ApplicationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [resume, setResume] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('resume', resume);

    try {
        await submitApplication(formData);
        alert('Application submitted successfully!');
      } catch (error) {
        alert('Failed to submit the application.');
      }
    // const response = await axios.post('http://localhost:5000/api/submit', formData, {
    //     headers: { 'Content-Type': 'multipart/form-data' },
    //   });
    //   alert('Application submitted successfully!');
    // } catch (error) {
    //   alert('Failed to submit the application.');
    // }
  };

  return (
    <div className="application-form">
      <h2>Submit Job Application</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="resume">Resume (PDF)</label>
          <input type="file" id="resume" accept=".pdf" onChange={(e) => setResume(e.target.files[0])} required />
        </div>
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default ApplicationForm;
