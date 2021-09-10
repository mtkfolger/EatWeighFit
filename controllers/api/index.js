const router = require('express').Router();
const fitRoutes = require('./fitRoutes');
const userRoutes = require('./userRoutes');
const weighRoutes = require('./weightRoutes');
const eatRoutes = require('./Eat')

router.use('/users', userRoutes);
router.use('/fit', fitRoutes);
router.use('/eat', eatRoutes);
router.use('/weigh', weighRoutes);

module.exports = router;

