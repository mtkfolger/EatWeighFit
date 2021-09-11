const router = require('express').Router();
const { User, Weight, Goal, Fit, Eat, Meal } = require('../models');
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
            user,
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

router.get('/weigh', withAuth, async (req, res) => {
    console.log('WEIGH TEST')
    try {
        const weighData = await Weight.findAll({
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

        const weights = weighData.map((weigh) => weigh.get({ plain: true }));
        console.log(weights)
        res.render('weigh', {
            weights,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/fit', withAuth, async (req, res) => {
    try {
        const fitData = await Fit.findAll({
            attributes: { exclude: ['user_id'] },
            order: [['current_date', 'ASC']],
        });

        const fitness = fitData.map((fit) => fit.get({ plain: true }));
        console.log(fitness);
        res.render('fit', {
            fitness,
            logged_in:true
        });
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/eat', async (req, res) => {
    try {
        const eatData = await Eat.findAll({
            include: [
                {
                    model: User,
                    
                },
                {
                    model: Meal,
                    
                }
            ],
        });
        
        const eat = eatData.map((newEat) => newEat.get({ plain: true }));
        console.log(eat);

        res.render('eat', {
            eat,
            logged_in: true,
        })

    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;
