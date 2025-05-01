import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './MemberDetailsPage.css'; // Assuming you will add specific styling here

const MemberDetailsPage = () => {
  const { id } = useParams();
  const [member, setMember] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/members/${id}`)
      .then(res => setMember(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!member) return <p>Loading member details...</p>;

  return (
    <div className="member-details-container">
      <h2 className="page-heading">{member.name}</h2>

      <div className="member-details">
        <div className="member-img-container">
          <img
            src={`http://localhost:5000/uploads/${member.image}`}
            alt={member.name}
            className="member-img"
            style={{ width: '200px', borderRadius: '10px' }}
          />
        </div>

        <div className="member-info">
          <table className="member-info-table">
            <tbody>
              <tr>
                <td><strong>Role:</strong></td>
                <td>{member.role}</td>
              </tr>
              <tr>
                <td><strong>Email:</strong></td>
                <td>{member.email}</td>
              </tr>
              {member.hobbies && (
                <tr>
                  <td><strong>Hobbies:</strong></td>
                  <td>{member.hobbies}</td>
                </tr>
              )}
              {member.internship && (
                <tr>
                  <td><strong>Internship:</strong></td>
                  <td>{member.internship}</td>
                </tr>
              )}
              {member.aim && (
                <tr>
                  <td><strong>Career Aim:</strong></td>
                  <td>{member.aim}</td>
                </tr>
              )}
              {member.skills && (
                <tr>
                  <td><strong>Skills:</strong></td>
                  <td>{member.skills}</td>
                </tr>
              )}
              {member.github && (
                <tr>
                  <td><strong>GitHub:</strong></td>
                  <td>
                    <a href={member.github} target="_blank" rel="noopener noreferrer">
                      {member.github}
                    </a>
                  </td>
                </tr>
              )}
              {member.linkedin && (
                <tr>
                  <td><strong>LinkedIn:</strong></td>
                  <td>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      {member.linkedin}
                    </a>
                  </td>
                </tr>
              )}
              {member.resume && (
                <tr>
                  <td><strong>Resume:</strong></td>
                  <td>
                    <a href={`http://localhost:5000/uploads/${member.resume}`} target="_blank" rel="noopener noreferrer">
                      View Resume
                    </a>
                  </td>
                </tr>
              )}
              {member.certificate && (
                <tr>
                  <td><strong>Certificate:</strong></td>
                  <td>
                    <a href={`http://localhost:5000/uploads/${member.certificate}`} target="_blank" rel="noopener noreferrer">
                      View Certificate
                    </a>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MemberDetailsPage;
