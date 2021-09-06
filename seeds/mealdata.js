const {Meal} = require ("../models");

const mealdata = [];

const seedMeal = () => Meal.bulkCreate(mealdata);

module.exports = seedMeal;