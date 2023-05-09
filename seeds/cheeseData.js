const { Cheese } = require("../models");

const cheeseData = [
  { name: "Manchego" },
  { name: "Blue cheese" },
  { name: "Raclette du Valais" },
  { name: "Burrata" },
  { name: "Cotija" },
  { name: "Brie" },
  { name: "Colby" },
  { name: "Mozzarella" },
  { name: "Feta" },
  { name: "Ricotta" },
  { name: "Mascarpone" },
  { name: "Karaván" },
  { name: "Roasted Garlic Cheddar" },
  { name: "Scallion Onion Cheddar" },
  { name: "Roquefort" },
  { name: "Taleggio" },
  { name: "Monterey Jack" },
  { name: "Gorgonzola" },
  { name: "Asiago" },
  { name: "Emmental" },
  { name: "Pecorino Toscano" },
  { name: "Cheddar" },
  { name: "Gouda" },
];

const seedCheese = () => Cheese.bulkCreate(cheeseData);

module.exports = seedCheese;
