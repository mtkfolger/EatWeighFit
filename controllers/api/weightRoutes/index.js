const router = require('express').Router();
const goalsRoutes = require('./goalRoutes');
const weighRoutes = require('./weightRoutes');

router.use('/', weighRoutes);
router.use('/goals', goalsRoutes);

module.exports = router;