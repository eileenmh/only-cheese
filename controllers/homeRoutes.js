const express = require('express');
const router = express.Router();
const withAuth = require('../utils/auth')

// Home Page API route
router.get('/', (req, res) => {
  res.send('Welcome to OnlyCheese* Home Page!');
});

router.get('/login', (req, res) => {
  res.send('Welcome to the Login Page!');
});

router.get('/cheesefolio', withAuth, (req, res) => {
  res.send('This is your Cheesefolio!');
});

module.exports = router;