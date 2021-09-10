const router = require('express').Router();
const mealRoutes = require('./Meal');
const eatRoutes = require('./eatRoutes');

router.use('/', eatRoutes)
router.use('/meal', mealRoutes);

module.exports = router;
