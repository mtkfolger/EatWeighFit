const router = require('express').Router();
const meal = require('.');
const withAuth = require('../../../utils/auth');

router.use('/', meal);
router.use('/', )

module.exports = router

// send eat file to login in page if user not logged in