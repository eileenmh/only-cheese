const express = require('express');
const router = express.Router();

// Login Landing Page API route
router.get('/', (req, res) => {
  res.send('Welcome to the OnlyCheese* Login Page!');
});

// Cheesfolio Page
router.get('/Cheesfolio', (req, res) => {
  res.send('Welcome to the Cheese Folio!');
});

// Message Board API route
router.get('/message-board', (req, res) => {
  res.send('Welcome to the OnlyCheese* Message Board!');
});

// Chat Room API route
router.get('/chat-room', (req, res) => {
  res.send('Welcome to the OnlyCheese* Chat Room!');
});

// Try a New Cheese API route
router.get('/newCheese', (req, res) => {
  res.send('Welcome to the OnlyCheese* Try a new Cheese Today!');
});

module.exports = router;