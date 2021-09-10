const router = require('express').Router();
const eatRoutes = require('../Eat');

router.use('/', eatRoutes);

module.exports = router;
