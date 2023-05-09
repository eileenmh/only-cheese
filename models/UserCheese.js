const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class UserCheese extends Model {}
UserCheese.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    cheese_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "cheese",
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
