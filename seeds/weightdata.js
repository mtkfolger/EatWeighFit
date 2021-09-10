const {Weight} = require ("../models");

const weightdata = [{
    "weight": 150,
    "age": 45,
    "height": 80,
    "user_id": 1,
    "goal_id": 1,
  }];

const seedweight = () => Weight.bulkCreate(weightdata);

module.exports = seedweight;