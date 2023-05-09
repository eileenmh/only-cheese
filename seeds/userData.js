const { User } = require("../models");

const userData = [
  {
    name: "Sal",
    email: "sal@hotmail.com",
    city: "Austin",
    state: "TX",
    bio: "Hello, My name is Sal and I love Gouda",
    password: "password12345",
  },
  {
    name: "Lernantino",
    email: "lernantino@gmail.com",
    city: "Austin",
    state: "TX",
    bio: "Hello, My name is Lernantino and I love Monterey Jack",
    password: "password12345",
  },
  {
    name: "Amiko",
    email: "amiko2k20@aol.com",
    city: "Austin",
    state: "TX",
    bio: "Hello, My name is Amiko and I love Cheddar",
    password: "password12345",
  },
  {
    name: "Jordan",
    email: "jordan99@msn.com",
    city: "Austin",
    state: "TX",
    bio: "Hello, My name is Jordan and I love Gorgonzola",
    password: "password12345",
  },
  {
    name: "Blake",
    email: "the_blake@yahoo.com",
    city: "Austin",
    state: "TX",
    bio: "Hello, My name is Blake and I love Asiago",
    password: "password12345",
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
