const router = require('express').Router();
const meal = require('./mealRoutes');

router.use('/', meal);

module.exports = router

// send eat file to login in page if user not logged in