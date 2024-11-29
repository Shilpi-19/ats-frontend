import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Optional for styling

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Apply</Link></li>
        <li><Link to="/status">Check Status</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
