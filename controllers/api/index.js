const router = require("express").Router();
const userRoutes = require("./userRoutes");
const cheeseRoutes = require("./cheeseRoutes");

router.use("/users", userRoutes);
router.use("/cheese", cheeseRoutes);

module.exports = router;
