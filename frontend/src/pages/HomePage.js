// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Assuming you'll add specific styling here

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="content">
        <h1 className="page-heading">Welcome to the Student Team Management App</h1>
        <p className="intro-text">Manage your project team members with ease.</p>

        <div className="button-group">
          <Link to="/add" className="btn btn-primary">Add Member</Link>
          <Link to="/members" className="btn btn-secondary">View Members</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
