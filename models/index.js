const User = require("./User");
const Cheese = require("./Cheese");
const UserCheese = require("./UserCheese");

User.belongsToMany(Cheese, { through: UserCheese, foreignKey: "user_id" });
Cheese.belongsToMany(User, { through: UserCheese, foreignKey: "cheese_id" });

module.exports = { User, Cheese, UserCheese };
