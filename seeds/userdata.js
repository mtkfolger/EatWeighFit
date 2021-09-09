const {User} = require ("../models");

const userdata = [{
    "name": "John",
    "email": "john@aol.com",
    "password": "password1",
  }];

const seedUser = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;