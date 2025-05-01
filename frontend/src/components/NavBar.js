import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-header">
        <h1 className="team-name">Student Team Manager</h1>
        <div className="team-label">Team Simple</div>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/add">Add Member</Link>
        <Link to="/members">View Members</Link>
      </div>
    </nav>
  );
};

export default NavBar;
