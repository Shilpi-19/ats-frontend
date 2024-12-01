import React, { useState } from 'react';
import './ApplicationStatus.css'; // Importing CSS for styling
import { checkApplicationStatus } from '../services/api'; // Importing the API function

const ApplicationStatus = () => {
  const [email, setEmail] = useState('');
  const [applicationData, setApplicationData] = useState(null);
  const [error, setError] = useState(null);

  const handleCheckStatus = async () => {
    setError(null); // Reset any previous errors
    setApplicationData(null); // Clear previous application data
    try {
      const data = await checkApplicationStatus(email);
      setApplicationData(data); // Store the response data
    } catch (err) {
      setError('Error retrieving application status. Please try again.');
    }
  };

  return (
    <div className="application-status">
      <h2>Check Application Status</h2>
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
      <button onClick={handleCheckStatus}>Check Status</button>

      {/* Display error message */}
      {error && <p className="error">{error}</p>}

      {/* Display application data in table format */}
      {applicationData && (
        <div className="application-details">
          <h3>Application Details</h3>
          <table className="application-table">
            <tbody>
              <tr>
                <th>Name</th>
                <td>{applicationData.name || 'N/A'}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{applicationData.email || 'N/A'}</td>
              </tr>
              <tr>
                <th>Is ATS Friendly</th>
                <td>{applicationData.is_ats_friendly ? 'Yes' : 'No'}</td>
              </tr>
            </tbody>
          </table>

          {/* Display missing keywords */}
          {applicationData.missing_keywords && applicationData.missing_keywords.length > 0 && (
            <>
              <h4>Missing Keywords</h4>
              <table className="application-table">
                <thead>
                  <tr>
                    <th>Keyword</th>
                  </tr>
                </thead>
                <tbody>
                  {applicationData.missing_keywords.map((keyword, index) => (
                    <tr key={index}>
                      <td>{keyword}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}

          {/* Display format issues */}
          {applicationData.format_issues && applicationData.format_issues.length > 0 && (
            <>
              <h4>Format Issues</h4>
              <table className="application-table">
                <thead>
                  <tr>
                    <th>Issue</th>
                  </tr>
                </thead>
                <tbody>
                  {applicationData.format_issues.map((issue, index) => (
                    <tr key={index}>
                      <td>{issue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}

          {/* Display recommendations */}
          {applicationData.recommendations && applicationData.recommendations.length > 0 && (
            <>
              <h4>Recommendations</h4>
              <table className="application-table">
                <thead>
                  <tr>
                    <th>Recommendation</th>
                  </tr>
                </thead>
                <tbody>
                  {applicationData.recommendations.map((recommendation, index) => (
                    <tr key={index}>
                      <td>{recommendation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ApplicationStatus;








// import React, { useState } from 'react';
// import './ApplicationStatus.css'; // Importing CSS for styling
// import { checkApplicationStatus } from '../services/api'; // Importing the API function

// const ApplicationStatus = () => {
//   const [email, setEmail] = useState('');
//   const [applicationData, setApplicationData] = useState(null);
//   const [error, setError] = useState(null);

//   const handleCheckStatus = async () => {
//     setError(null); // Reset any previous errors
//     setApplicationData(null); // Clear previous application data
//     try {
//       const data = await checkApplicationStatus(email);
//       setApplicationData(data); // Store the response data
//     } catch (err) {
//       setError('Error retrieving application status. Please try again.');
//     }
//   };

//   return (
//     <div className="application-status">
//       <h2>Check Application Status</h2>
//       <div className="form-group">
//         <label htmlFor="email">Email</label>
//         <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//       </div>
//       <button onClick={handleCheckStatus}>Check Status</button>

//       {/* Display error message */}
//       {error && <p className="error">{error}</p>}

//       {/* Display application data */}
//       {applicationData && (
//         <div className="application-details">
//           <h3>Application Details</h3>
//           <p><strong>Name:</strong> {applicationData.name || 'N/A'}</p>
//           <p><strong>Email:</strong> {applicationData.email || 'N/A'}</p>
//           <p>
//             <strong>Is ATS Friendly:</strong>{' '}
//             {applicationData.is_ats_friendly ? 'Yes' : 'No'}
//           </p>

//           {/* Display missing keywords */}
//           {applicationData.missing_keywords && applicationData.missing_keywords.length > 0 && (
//             <>
//               <h4>Missing Keywords</h4>
//               <ul>
//                 {applicationData.missing_keywords.map((keyword, index) => (
//                   <li key={index}>{keyword}</li>
//                 ))}
//               </ul>
//             </>
//           )}

//           {/* Display format issues */}
//           {applicationData.format_issues && applicationData.format_issues.length > 0 && (
//             <>
//               <h4>Format Issues</h4>
//               <ul>
//                 {applicationData.format_issues.map((issue, index) => (
//                   <li key={index}>{issue}</li>
//                 ))}
//               </ul>
//             </>
//           )}

//           {/* Display recommendations */}
//           {applicationData.recommendations && applicationData.recommendations.length > 0 && (
//             <>
//               <h4>Recommendations</h4>
//               <ul>
//                 {applicationData.recommendations.map((recommendation, index) => (
//                   <li key={index}>{recommendation}</li>
//                 ))}
//               </ul>
//             </>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ApplicationStatus;
