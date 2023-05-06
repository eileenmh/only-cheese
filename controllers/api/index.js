const router = require("express").Router();
const userRoutes = require("./userRoutes");
const cheesefolioRoutes = require("./cheesefolioRoutes");

router.use("/users", userRoutes);
router.use("/cheesefolio", cheesefolioRoutes);

module.exports = router;
