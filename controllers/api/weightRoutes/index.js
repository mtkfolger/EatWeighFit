const router = require('express').Router();
const goalRoutes = require('./goalRoutes');
const weighRoutes = require('./weightRoutes');

router.use('/', weighRoutes);
router.use('/goal', goalRoutes);

module.exports = router;