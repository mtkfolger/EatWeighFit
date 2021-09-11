const router = require('express').Router();
const goal = require('./goalRoutes');

router.use('/', goal);

module.exports = router;