const {Fit} = require ("../models");

const fitdata = [{
    "workout_type": "Roll 'Em Up",
    "longitude": 98080,
    "latitude": 800,
    "calories_burned": 300,
    "user_id": 1,
  },
  {
    "workout_type": "workout",
    "longitude": 343,
    "latitude": 3434,
    "calories_burned": 300,
    "user_id": 1,
  },
  {
    "workout_type": "test",
    "longitude": 7777,
    "latitude": 8060,
    "calories_burned": 300,
    "user_id": 1,
  }];

const seedFit = () => Fit.bulkCreate(fitdata);

module.exports = seedFit;