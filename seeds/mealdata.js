const {Meal} = require ("../models");

const mealdata = [{
    "meal_type": "Fruit",
  }];

const seedMeal = () => Meal.bulkCreate(mealdata);

module.exports = seedMeal;