import React, { useEffect, useState } from 'react';
import { fetchApplications } from '../services/api'; // Import fetch function
import './Dashboard.css'; // Importing CSS for styling

const Dashboard = () => {
  const [applications, setApplications] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getApplications = async () => {
      try {
        const data = await fetchApplications(); // Fetch data
        setApplications(data); // Set the applications state with the fetched data
      } catch (err) {
        setError('Failed to load applications'); // Handle errors
      }
    };

    getApplications();
  }, []);

  return (
    <div className="dashboard">
      <h2>Recruiter Dashboard</h2>
      {error && <p className="error">{error}</p>} {/* Display error if there's an issue */}
      <table>
        <thead>
          <tr>
            <th>Applicant Name</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {/* Ensure the data is being mapped correctly */}
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