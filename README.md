# Team-Simple
This is a full-stack project developed by our team for the subject Full Stack Development. It demonstrates the use of MongoDB, Express.js, React.js, and Node.js (MERN stack) to build a team management web application

# 📌 Project Introduction

This is a MERN stack web app that allows users to:
- Add new team members
- View all members based on group
- View detailed information of each member


# 🛠 API Endpoints
Here are the available API endpoints for the backend:

### 1. Add a New Member (POST)
URL: /api/members

Method: POST

Body Parameters:

name (String) - Member's name

role (String) - Member's role

email (String) - Member's email

hobbies (String) - Comma-separated hobbies

internship (String) - Internship details

aim (String) - Career aim

skills (String) - Comma-separated skills

github (String) - Github profile URL

linkedin (String) - LinkedIn profile URL

Files (optional):

image (file) - Member's image

resume (file) - Resume file

certificate (file) - Certificate file

### 2. Get All Members (GET)
URL: /api/members

Method: GET

Response: List of all team members

### 3. Get a Member by ID (GET)
URL: /api/members/:id

Method: GET

Response: A single member's details based on the provided id


# ⚙️ Installation Steps
### 1. Clone the Repository
git clone https://github.com/MohamedIrsathworks/Team-Simple.git
cd Team-Simple

### 2. MongoDB Connection
open a terminal and start mongodb using command "Mongod"

### 3. Backend Setup
cd backend
npm install
node server.js

### 4. Frontend Setup
cd frontend
npm install
npm start

### NOW ITS ALL GOOD TO GO... Open your browser and go to: http://localhost:3000
