// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <li><Link to="/">Dashboard</Link></li>
      <li><Link to="/courses">Courses</Link></li>
      <li><Link to="/progress">Progress</Link></li>
    </ul>
  </nav>
);

export default Navbar;
