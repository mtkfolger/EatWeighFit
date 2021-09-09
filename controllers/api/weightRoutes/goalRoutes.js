const router = require('express').Router();
const { Weight, Goals, User } = require('../../../models');
const withAuth = require('../../../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        // const goalData = await Goals.
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;