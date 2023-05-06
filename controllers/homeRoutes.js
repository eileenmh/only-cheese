const express = require("express");
const router = express.Router();
const withAuth = require("../utils/auth");

// Landing Page
router.get("/", (req, res) => {
  res.render("homepage");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

// Login Page
router.get("/login", (req, res) => {
  res.render("login");
});

/***
REQUIRE LOGIN via withAuth
***/
// Cheesefolio (i.e., Profile Page)
router.get("/cheesefolio", withAuth, (req, res) => {
  res.send("Welcome to the Cheese Folio!");
});

// Chat Room API routes
router.get("/chat-room", withAuth, (req, res) => {
  res.send("Welcome to the OnlyCheese* Chat Room!");
});

module.exports = router;
