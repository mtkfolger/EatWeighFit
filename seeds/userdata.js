const {User} = require ("../models");

const userdata = [{
    "name": "John",
    "email": "john@aol.com",
    "password": "password1",
  },
  {
    "name": "Mike",
    "email": "mike@aol.com",
    "password": "password2",
  },
  {
    "name": "Sally",
    "email": "sally@aol.com",
    "password": "password3",
  }];

const seedUser = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;