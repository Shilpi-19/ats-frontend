import axios from 'axios';

// Set the base URL for your API calls
const API_URL = 'http://localhost:5000/api';

// Function to submit the application form data
export const submitApplication = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/submit`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response.data;
  } catch (error) {
    throw new Error('Error submitting application');
  }
};

// Function to check the application status by email
export const checkApplicationStatus = async (email) => {
  try {
    const response = await axios.get(`${API_URL}/status/${email}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching application status');
  }
};

// Function to fetch all applications for the recruiter dashboard
export const fetchApplications = async () => {
  try {
    const response = await axios.get(`${API_URL}/applications`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching applications');
  }
};
