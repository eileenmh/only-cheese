const { Cheese } = require("../models");

const cheeseData = [
  { name: "Manchego" },
  { name: "Blue cheese" },
  { name: "Raclette du Valais" },
  { name: "Asiago" },
  { name: "Burrata" },
  { name: "Cheddar" },
  { name: "Cotija" },
  { name: "Brie" },
  { name: "Colby" },
  { name: "Mozzarella" },
  { name: "Feta" },
  { name: "Ricotta" },
  { name: "Mascarpone" },
];

const seedCheese = () => Cheese.bulkCreate(cheeseData);

module.exports = seedCheese;
