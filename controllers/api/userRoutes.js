const router = require('express').Router();
const { User } = require('../../models');

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

router.post('/signup', async (req, res) => {
  try {
    let userData = await User.findOne({ where: { email: req.body.email } });

    if (userData) {
      res
        .status(400)
        .json({ message: 'Looks like you already have an account, please try logging in.' });
      return;
    }
    console.log('req.body', req.body);
    userData = await User.create({ name: req.body.username, email: req.body.email, password: req.body.password });
    console.log('Jamies auto-generated ID', userData.id);

    // res.json({ user: userData, message: 'Thank you for signing up. You are now logged in!' });


    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      console.log('thank you for signing up');

      res.json({ user: userData, message: 'Thank you for signing up. You are now logged in!' });
    });
  } catch (err) {
    console.log('err', err);
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(200).end();
    });
  } else {
    res.status(400).end();
  }
});

module.exports = router;
