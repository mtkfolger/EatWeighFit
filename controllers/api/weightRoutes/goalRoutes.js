const router = require('express').Router();
const { Weight, Goal, User } = require('../../../models');
const withAuth = require('../../../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        // const goalData = await Goal.
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;