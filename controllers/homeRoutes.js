const express = require('express');
const router = express.Router();
const withAuth = require('../utils/auth')

// Home Page API route
router.get('/', (req, res) => {
  res.send('Welcome to OnlyCheese* Home Page!');
});


module.exports = router;