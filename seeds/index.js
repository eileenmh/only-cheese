const sequelize = require("../config/connection");
const seedCheese = require("./cheeseData");
const seedUser = require("./userData");

const seedAll = async () => {
  await sequelize.sync({ force: true, logging: true });

  await seedCheese();
  await seedUser();
  process.exit(0);
};

seedAll();
