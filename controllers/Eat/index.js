const router = require('express').Router();
<<<<<<< HEAD
const eatRoutes = require('../Eat');

router.use('/', eatRoutes);

module.exports = router;
=======
const meal = require('.');
const withAuth = require('../../../utils/auth');

router.use('/', meal);
router.use('/', )

module.exports = router

// send eat file to login in page if user not logged in
>>>>>>> main