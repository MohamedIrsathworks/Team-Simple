import React, { useState } from 'react';
import axios from 'axios';
import './AddMemberPage.css'; // Import your styling file

const AddMemberPage = () => {
  const [member, setMember] = useState({
    name: '',
    role: '',
    email: '',
    hobbies: '',
    internship: '',
    aim: '',
    skills: '',
    github: '',
    linkedin: ''
  });

  const [image, setImage] = useState(null);
  const [resume, setResume] = useState(null);
  const [certificate, setCertificate] = useState(null);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!member.name || !member.role || !member.email || !image) {
      setMessage("Error: Name, Role, Email, and Profile Image are required.");
      return;
    }

    const formData = new FormData();
    Object.entries(member).forEach(([key, value]) => {
      formData.append(key, value);
    });

    formData.append('image', image);
    if (resume) formData.append('resume', resume);
    if (certificate) formData.append('certificate', certificate);

    try {
      await axios.post('http://localhost:5000/api/members', formData);
      setMessage("Member added successfully!");
      setMember({
        name: '', role: '', email: '', hobbies: '', internship: '', aim: '',
        skills: '', github: '', linkedin: ''
      });
      setImage(null);
      setResume(null);
      setCertificate(null);
    } catch (err) {
      console.error(err);
      setMessage("Error: Failed to add member.");
    }
  };

  return (
    <div className="form-container">
      <h2>Add Team Member</h2>

      <form onSubmit={handleSubmit} encType="multipart/form-data" className="member-form">
        <label>Name:</label>
        <input type="text" name="name" value={member.name} onChange={handleChange} placeholder="Full Name" required />

        <label>Role / Position:</label>
        <input type="text" name="role" value={member.role} onChange={handleChange} placeholder="e.g. Frontend Developer" required />

        <label>Email:</label>
        <input type="email" name="email" value={member.email} onChange={handleChange} placeholder="you@example.com" required />

        <label>Hobbies (comma-separated):</label>
        <input type="text" name="hobbies" value={member.hobbies} onChange={handleChange} placeholder="Reading, Music, Sports" />

        <label>Internship Experience:</label>
        <textarea name="internship" value={member.internship} onChange={handleChange} placeholder="Describe any past internships" />

        <label>Career Aim:</label>
        <textarea name="aim" value={member.aim} onChange={handleChange} placeholder="What do you want to achieve in your career?" />

        <label>Skills (comma-separated):</label>
        <input type="text" name="skills" value={member.skills} onChange={handleChange} placeholder="JavaScript, React, Python" />

        <label>GitHub URL:</label>
        <input type="url" name="github" value={member.github} onChange={handleChange} placeholder="https://github.com/username" />

        <label>LinkedIn URL:</label>
        <input type="url" name="linkedin" value={member.linkedin} onChange={handleChange} placeholder="https://linkedin.com/in/username" />

        <label>Upload Profile Image:</label>
        <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} required />

        <label>Upload Resume (PDF, DOC, DOCX):</label>
        <input type="file" accept=".pdf,.doc,.docx" onChange={(e) => setResume(e.target.files[0])} />

        <label>Upload Certificates (PDF or Image):</label>
        <input type="file" accept=".pdf,.jpg,.jpeg,.png" onChange={(e) => setCertificate(e.target.files[0])} />

        <button type="submit">Submit Member</button>
      </form>

      {message && (
        <p className={`form-message ${message.startsWith('Error') ? 'error' : 'success'}`}>
          {message}
        </p>
      )}
    </div>
  );
};

export default AddMemberPage;
