const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class User_Cheese extends Model {}
User_Cheese.init(
  {},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user_cheese",
  }
);
