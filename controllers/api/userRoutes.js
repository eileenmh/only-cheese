const router = require("express").Router();
const { User } = require("../../models");

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    console.log("userData", userData);

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/create-profile", async (req, res) => {
  try {
    const createProfile = await User.update(
      {
        bio: req.body.bio,
        city: req.body.city,
        state: req.body.state,
      },
      {
        where: {
          id: req.session.user_id,
        },
      }
    );
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/signup", async (req, res) => {
  try {
    userData = await User.create({
      name: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    console.log("Users auto-generated ID", userData.id);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.sendStatus(200);
    });
  } catch (err) {
    console.log("err", err);
    res.status(400).json(err);
  }
});

router.post("/email", async (req, res) => {
  try {
    let accountExists = await User.findOne({
      where: { email: req.body.email },
    });

    if (accountExists) {
      res.sendStatus(400);
    } else {
      res.sendStatus(200);
    }
  } catch {}
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(200).end();
    });
    res.redirect("/");
  } else {
    res.status(400).end();
  }
});

module.exports = router;
