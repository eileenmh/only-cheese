const express = require("express");
const router = express.Router();
const withAuth = require("../utils/auth");

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
// Cheesefolio (i.e., Profile Page)
router.get("/cheesefolio", withAuth, (req, res) => {
  res.render("cheesefolio", {
    logged_in: req.session.logged_in,
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
