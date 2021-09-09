const {Goals} = require ("../models");

const goalsdata = [{
    "target_weight": 125.5,
    "target_date": "5/6/2022",
    "current_body_type": "dad body",
    "ideal_body_type": "muscle",
  },
  {
    "target_weight": 165.7,
    "target_date": "5/6/2023",
    "current_body_type": "overweight",
    "ideal_body_type": "fit",
  },
  {
    "target_weight": 195.2,
    "target_date": "5/6/2024",
    "current_body_type": "underweight",
    "ideal_body_type": "normal",
  }];

const seedGoals = () => Goals.bulkCreate(goalsdata);

module.exports = seedGoals;