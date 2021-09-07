const {Weight} = require ("../models");

const weightdata = [];

const seedweight = () => Weight.bulkCreate(weightdata);

module.exports = seedweight;