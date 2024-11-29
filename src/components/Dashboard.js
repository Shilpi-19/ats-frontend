import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css'; // Importing CSS for styling

const Dashboard = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/applications');
        setApplications(response.data);
      } catch (error) {
        alert('Failed to load applications');
      }
    };

    fetchApplications();
  }, []);

  return (
    <div className="dashboard">
      <h2>Recruiter Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>Applicant Name</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => (
            <tr key={app.id}>
              <td>{app.name}</td>
              <td>{app.email}</td>
              <td>{app.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
