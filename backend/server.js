// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const memberRoutes = require('./routes/memberRoutes');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

mongoose.connect('mongodb://127.0.0.1:27017/student_team', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected')).catch(err => console.log(err));

app.use('/api/members', memberRoutes);

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
