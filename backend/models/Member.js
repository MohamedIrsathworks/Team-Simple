const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  name: String,
  role: String,
  email: String,
  image: String,
  resume: String,
  certificate: String,
  hobbies: [String],
  internship: String,
  aim: String,
  skills: [String],
  github: String,
  linkedin: String,
});

module.exports = mongoose.model('Member', memberSchema);
