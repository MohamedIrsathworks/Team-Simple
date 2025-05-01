// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddMemberPage from './pages/AddMemberPage';
import MemberDetailsPage from './pages/MemberDetailsPage';
import ViewMembersPage from './pages/ViewMembersPage';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddMemberPage />} />
          <Route path="/members" element={<ViewMembersPage />} />
          <Route path="/members/:id" element={<MemberDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
