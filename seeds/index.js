const sequelize = require("../config/connection");
const seedCheese = require("./CheeseData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedCheese();
  process.exit(0);
};

seedAll();
