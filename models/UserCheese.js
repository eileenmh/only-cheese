const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class User_Cheese extends Model {}
User_Cheese.init(
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

module.exports = User_Cheese;
