const router = require('express').Router();
const { User } = require('../../models');

// Login Landing Page API routes
router.get('/', (req, res) => {
  res.send('Welcome to the OnlyCheese* Login Page!');
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
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

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;