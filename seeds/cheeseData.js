const { Cheese } = require("../models");

const cheeseData = [
  { name: "Manchego" },
  { name: "Blue cheese" },
  { name: "Raclette du Valais" },
  { name: ""}
];

const seedCheese = () => Cheese.bulkCreate(cheeseData);

module.exports = seedCheese;
