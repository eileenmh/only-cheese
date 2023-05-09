const { User } = require("../models");

const userData = [
  {
    name: "Remy",
    email: "remy@hotmail.com",
    city: "Paris",
    state: "TX",
    bio: "Hello, My name is Sal and I love Gouda",
    password: "password12345",
    bio: "I love cheeses of all kinds Roquefort is my favorite. I am fond of pairing my cheese with Sauternes as well as some Almonds and dried fruits.",
  },
  {
    name: "Fievel",
    email: "fievel@gmail.com",
    city: "Hamburg",
    state: "TX",
    bio: "Hello, My name is Lernantino and I love Monterey Jack",
    password: "password12345",
    bio: "Scallion Onion Cheddar is my Favorite, and nothing suits it better than a nice breakfast or quiche.",
  },
  {
    name: "Bernard",
    email: "bernard2k20@aol.com",
    city: "New Orleans",
    state: "Louisiana",
    password: "password12345",
    bio: "Saving the Day is my thing and I am fine eating a slice of Cheddar on the way!",
  },
  {
    name: "Bianca",
    email: "bianca@msn.com",
    city: "New Orleans",
    state: "Louisiana",
    password: "password12345",
    bio: "I love Karaván cheese it reminds me of home,  It is so good with pecans and Cabernet Sauvignon.",
  },
  {
    name: "Stuart",
    email: "the_blake@yahoo.com",
    city: "New York",
    state: "NY",
    password: "password12345",
    bio: "I love Roasted Garlic Cheddar on toasted crackers, but my new family is starting to change my mind to Fiesta Cheddar!",
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
