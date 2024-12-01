import axios from 'axios';

// Set the base URL for your API calls
const API_URL = 'http://127.0.0.1:5000';



// Function to submit the application form data
export const submitApplication = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/applications`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response.data;
  } catch (error) {
    throw new Error('Error submitting application');
  }
};

// // Function to check the application status by email
// export const checkApplicationStatus = async (email) => {
//   try {
//     const response = await axios.get(`${API_URL}/check_email/${email}`);
//     return response.data;
//   } catch (error) {
//     throw new Error('Error fetching application status');
//   }
// };

export const checkApplicationStatus = async (email) => {
  try {
    const response = await axios.get(`${API_URL}/check_email`, {
      params: { email }, // Pass email as a query parameter
    });
    return response.data;
  } catch (error) {
    console.error('API call error:', error.response || error.message);
    throw new Error('Error fetching application status');
  }
};

// Function to fetch all applications for the recruiter dashboard
export const fetchApplications = async () => {
  try {
    const response = await axios.get(`${API_URL}/get_all_applications`);
    // Extracting data from the response
    const formattedData = response.data.data.map((app) => ({
      id: app._id, // Assuming `_id` as the unique key
      name: app.name,
      email: app.email,
      status: app.resume.is_ats_friendly ? 'ATS Friendly' : 'Not ATS Friendly', // Example of status logic
    }));
    return formattedData;
  } catch (error) {
    throw new Error('Error fetching applications');
  }
};
