const {Goals} = require ("../models");

const goalsdata = [];

const seedGoals = () => Goals.bulkCreate(goalsdata);

module.exports = seedGoals;