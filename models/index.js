const User = require("./User");
const Cheese = require("./Cheese");
const User_Cheese = require("./User_Cheese");

User.belongsToMany(Cheese, { through: User_Cheese });
Cheese.belongsToMany(User, { through: User_Cheese });

module.exports = { User, Cheese, User_Cheese };
