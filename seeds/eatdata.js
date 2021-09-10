const {Eat} = require ("../models");

const eatdata = [{
    "food_name": "apple",
    "calories": 34,
    "meal_id":1,
    "user_id":1,
  },
  {
    "food_name": "pear",
    "calories": 67,
    "meal_id":1,
    "user_id":1,
  },
  {
    "food_name": "peanut",
    "calories": 15,
    "meal_id":1,
    "user_id":1,
  }];

const seedEat = () => Eat.bulkCreate(eatdata);

module.exports = seedEat;