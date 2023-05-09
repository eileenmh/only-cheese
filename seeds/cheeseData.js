const { Cheese } = require("../models");

const cheeseData = [
  { name: "Manchego" },
  { name: "Blue cheese" },
  { name: "Raclette du Valais" },
  { name: "Taleggio" },
  { name: "Cotija" },
  { name: "Monterey Jack"},
  { name: "Gorgonzola"},
  { name: "Asiago"},
  { name: "Mozzarella"},
  { name: "Emmental"},
  { name: "Pecorino Toscano"},
  { name: "Cheddar"},
  { name: "Gouda"},
];

const seedCheese = () => Cheese.bulkCreate(cheeseData);

module.exports = seedCheese;
