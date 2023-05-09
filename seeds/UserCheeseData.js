const { UserCheese } = require("../models");

const userCheeseData = [
  {
    user_id: 1,
    cheese_id: 7,
  },
  {
    user_id: 1,
    cheese_id: 6,
  },
  {
    user_id: 1,
    cheese_id: 4,
  },
];

const seedUserCheese = UserCheese.bulkCreate(userCheeseData, {
  fields: ["user_id", "cheese_id"],
});

module.exports = seedUserCheese;
