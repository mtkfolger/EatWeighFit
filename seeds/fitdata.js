const {Fit} = require ("../models");

const fitdata = [];

const seedFit = () => Fit.bulkCreate(fitdata);

module.exports = seedFit;