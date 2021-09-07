const {Eat} = require ("../models");

const eatdata = [];

const seedEat = () => Eat.bulkCreate(eatdata);

module.exports = seedEat;