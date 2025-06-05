import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaBook, FaChartBar, FaCog, FaSignOutAlt } from 'react-icons/fa';

function Sidebar() {
  return (
    <div className="bg-dark text-white p-3" style={{ width: '220px' }}>
      <nav className="nav flex-column">
        <NavLink to="/home" className="nav-link text-white"><FaBook /> Home</NavLink>
        <NavLink to="/icon2" className="nav-link text-white"><FaChartBar /> Icon 1</NavLink>
        <NavLink to="/icon3" className="nav-link text-white"><FaCog /> Icon 2</NavLink>
        <NavLink to="/icon3" className="nav-link text-white"><FaCog /> Icon 3</NavLink>
        <NavLink to="/Subjectpage" className="nav-link text-white"><FaCog /> Subjectpage</NavLink>
        <NavLink to="/ContactForm" className="nav-link text-white"><FaCog />ContactForm</NavLink>
         <NavLink to="/PayPalPage" className="nav-link text-white"><FaCog />PayPalPage</NavLink>
        <NavLink to="/logout" className="nav-link text-white"><FaSignOutAlt /> Logout</NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;
