const router = require("express").Router();
const userRoutes = require("./userRoutes");
const userRoutes = require("./userRoutes");
const cheeseRoutes = require("./cheeseRoutes");

router.use("/users", userRoutes);

module.exports = router;
