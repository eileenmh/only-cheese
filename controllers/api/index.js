const router = require("express").Router();
const userRoutes = require("./userRoutes");

const handlebars = require('handlebars');

// Assume we have an array of user objects called `users`

const template = handlebars.compile(fs.readFileSync('cheese-date.handlebars', 'utf8'));
const html = template({ users });




router.use("/users", userRoutes);



module.exports = router;
