const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

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

module.exports = UserCheese;
