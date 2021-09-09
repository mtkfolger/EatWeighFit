const router = require('express').Router();
const mealRoutes = require('../Meal');

router.use('/', mealRoutes);


module.exports = router