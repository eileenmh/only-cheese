const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: "127.0.0.1", //replace with localhost if having trouble connecting to database
    dialect: "mysql",
    port: 3306,
  }
);

module.exports = sequelize;
