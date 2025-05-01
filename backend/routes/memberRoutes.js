const express = require('express');
const router = express.Router();
const multer = require('multer');
const Member = require('../models/Member');
const path = require('path');

// Storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});

// Accept multiple files
const upload = multer({ storage }).fields([
  { name: 'image', maxCount: 1 },
  { name: 'resume', maxCount: 1 },
  { name: 'certificate', maxCount: 1 },
]);

// POST route
router.post('/', upload, async (req, res) => {
  try {
    const {
      name, role, email, hobbies, internship, aim,
      skills, github, linkedin
    } = req.body;

    const newMember = new Member({
      name,
      role,
      email,
      image: req.files['image']?.[0]?.filename || '',
      resume: req.files['resume']?.[0]?.filename || '',
      certificate: req.files['certificate']?.[0]?.filename || '',
      hobbies: hobbies ? hobbies.split(',').map(h => h.trim()) : [],
      internship,
      aim,
      skills: skills ? skills.split(',').map(s => s.trim()) : [],
      github,
      linkedin,
    });

    await newMember.save();
    res.status(201).json(newMember);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error saving member' });
  }
});

router.get('/', async (req, res) => {
  const members = await Member.find();
  res.json(members);
});

router.get('/:id', async (req, res) => {
  const member = await Member.findById(req.params.id);
  res.json(member);
});

module.exports = router;
