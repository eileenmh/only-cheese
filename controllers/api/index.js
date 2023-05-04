const router = require("express").Router();
const userRoutes = require("./userRoutes");

const handlebars = require('handlebars');







router.use("/users", userRoutes);



module.exports = router;
