const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const User = require("./User");
const Cheese = require("./Cheese");

class UserCheese extends Model {}
UserCheese.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id",
      },
    },
    cheese_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Cheese,
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user_cheese",
  }
);

User.belongsToMany(Cheese, { through: UserCheese });
Cheese.belongsToMany(User, { through: UserCheese });

module.exports = { User, Cheese, UserCheese };
