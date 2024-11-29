// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ApplicationForm from './components/ApplicationForm';
import ApplicationStatus from './components/ApplicationStatus';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
const App = () => {
  return (
    <Router>
       <Navbar />
      <div className="App">
      <Routes>
          <Route path="/" element={<ApplicationForm />} />
          <Route path="/status" element={<ApplicationStatus />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
