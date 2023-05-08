const router = require("express").Router();
const withAuth = require("../utils/auth");
const { User } = require("../models");

// Landing Page
router.get("/", (req, res) => {
  res.render("homepage", {
    logged_in: req.session.logged_in,
  });
});

// Sign-Up Page -- if already logged in, redirect to homepage
router.get("/signup", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
  } else {
    res.render("signup", {
      logged_in: req.session.logged_in,
    });
  }
});

// Login Page -- if already logged in, redirect to homepage
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
  } else {
    res.render("login", {
      logged_in: req.session.logged_in,
    });
  }
});

/***
REQUIRE LOGIN via withAuth
***/
router.get("/cheesefolio", withAuth, async (req, res) => {
  let userData = await User.findByPk(req.session.user_id);

  console.log(userData);

  res.render("cheesefolio", {
    logged_in: req.session.logged_in,
    name: userData.name,
    bio: userData.bio,
    city: userData.city,
    state: userData.state,
  });
});

router.get("/cheesefolio-update", withAuth, (req, res) => {
  res.render("cheesefolio-update", {
    logged_in: req.session.logged_in,
  });
});

router.get("/cheese-date", withAuth, (req, res) => {
  res.render("placeholder", {
    logged_in: req.session.logged_in,
  });
});

// Chat Room API routes
router.get("/chat-room", withAuth, (req, res) => {
  res.render("placeholder", {
    logged_in: req.session.logged_in,
  });
});

module.exports = router;
