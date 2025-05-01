import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ViewMembersPage.css';

const ViewMembersPage = () => {
  const [groupedMembers, setGroupedMembers] = useState({});

  useEffect(() => {
    axios.get('http://localhost:5000/api/members')
      .then(res => groupByRole(res.data))
      .catch(err => console.error(err));
  }, []);

  const groupByRole = (members) => {
    const grouped = {};
    members.forEach(member => {
      if (!grouped[member.role]) {
        grouped[member.role] = [];
      }
      grouped[member.role].push(member);
    });
    setGroupedMembers(grouped);
  };

  return (
    <div className="view-members">
      <h2 className="page-heading">Team Members</h2>

      {Object.entries(groupedMembers).map(([role, members]) => (
        <div key={role} className="role-table-container">
          <h3 className="role-heading">{role}</h3>
          
          <table className="members-table">
            <thead>
              <tr>
                <th className="table-heading">Image</th>
                <th className="table-heading">Name</th>
                <th className="table-heading">Email</th>
                <th className="table-heading">Details</th>
              </tr>
            </thead>
            <tbody>
              {members.map(member => (
                <tr key={member._id}>
                  <td className="table-cell">
                    <img
                      src={`http://localhost:5000/uploads/${member.image}`}
                      alt={member.name}
                      className="member-img-table"
                    />
                  </td>
                  <td className="table-cell">{member.name}</td>
                  <td className="table-cell">{member.email}</td>
                  <td className="table-cell">
                    <Link to={`/members/${member._id}`} className="btn">View Details</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default ViewMembersPage;
