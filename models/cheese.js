const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Cheese extends Model {}

Cheese.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    cheese_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    milkType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "cheese",
  }
);

module.exports = Cheese;
