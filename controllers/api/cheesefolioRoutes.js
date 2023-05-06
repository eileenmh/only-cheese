// Cheesefolio (i.e., Profile Page)
const express = require("express");
const router = express.Router();
const withAuth = require("../../utils/auth");

router.get("/", withAuth, (req, res) => {
  res.render("cheesefolio", {
    logged_in: req.session.logged_in,
  });
});

module.exports = router;
