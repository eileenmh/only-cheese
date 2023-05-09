const { UserCheese } = require("../models");

const seedUserCheese = async function () {
  await UserCheese.create(
    {
      user_id: 1,
      cheese_id: 15,
    },
    {
      fields: ["user_id", "cheese_id"],
    }
  );

  await UserCheese.create(
    {
      user_id: 2,
      cheese_id: 14,
    },
    {
      fields: ["user_id", "cheese_id"],
    }
  );

  await UserCheese.create(
    {
      user_id: 3,
      cheese_id: 22,
    },
    {
      fields: ["user_id", "cheese_id"],
    }
  );

  await UserCheese.create(
    {
      user_id: 4,
      cheese_id: 12,
    },
    {
      fields: ["user_id", "cheese_id"],
    }
  );

  await UserCheese.create(
    {
      user_id: 5,
      cheese_id: 13,
    },
    {
      fields: ["user_id", "cheese_id"],
    }
  );
};

module.exports = seedUserCheese;
