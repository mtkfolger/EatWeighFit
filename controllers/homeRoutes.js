const router = require('express').Router();
const { User, Weight, Goal } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const weighData = await Weight.findAll({
            where: {user_id: req.session.user_id},
            include: [
                {
                    model: User,
                    attributes: { exclude: ['password'] },
                },
                {
                    model: Goal,
                    attributes: ['target_weight', 'target_date', 'current_body_type', 'ideal_body_type']
                }
            ],
        });

        const user = weighData.map((userInfo) => userInfo.get({ plain: true }));

        res.render('userProfiles', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req,res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

router.get('/signup', (req,res) => {
    res.render('signUp');
});

module.exports = router;
