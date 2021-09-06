const sequelize = require('../config/connection');
const seedeat = require('./eatdata');
const seedfit = require('./fitdata');
const seedgoals = require('./goalsdata');
const seedmeal = require('./mealdata');
const seeduser = require('./userdata');
const seedweight = require('./weightdata');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedeat();

  await seedfit();

  await seedgoals();

  await seedmeal();

  await seeduser();

  await seedweight();

  process.exit(0);
};

seedAll();