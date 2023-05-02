const express = require('express');
const router = express.Router();

// Login Landing Page API routes
router.get('/', (req, res) => {
  res.send('Welcome to the OnlyCheese* Login Page!');
});

router.post('/login', (req, res) => {
  res.send('Logged in successfully!');
});

// Cheesfolio Page API routes
router.get('/Cheesfolio', (req, res) => {
  res.send('Welcome to the Cheese Folio!');
});

router.post('/addCheese', (req, res) => {
// Added Cheese
  res.send('Cheese added successfully!');
});

// Message Board API routes
router.get('/message-board', (req, res) => {
  res.send('Welcome to the OnlyCheese* Message Board!');
});

// Chat Room API routes
router.get('/chat-room', (req, res) => {
  res.send('Welcome to the OnlyCheese* Chat Room!');
});

// Try a New Cheese API routes
router.get('/newCheese', (req, res) => {
  res.send('Welcome to the OnlyCheese* Try a new Cheese Today!');
});
module.exports = router;