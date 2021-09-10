const router = require('express').Router();
const { User, Weight, Goal } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id,{
            attributes: {exclude: ['password']},
            include: [{
                model: Weight, 
                attributes: ['weight', 'age', 'height'], 
            },{
                include: {
                    model: Goal, 
                    attributes: ['current_body_type'],
                }
            }], 
        });
        const userProfile = userData.map((user) => user.get({plain: true}));
        res.render('userProfiles', {
            ...userProfile, 
            logged_in: req.session.logged_in
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

// module.exports = router;