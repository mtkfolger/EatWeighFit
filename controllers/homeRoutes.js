const router = require('express').Router();
const { User, Weight, Goal, Fit, Eat } = require('../models');
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


        const userData = await User.create({
            name: user.user.name,
            email: user.user.email,
            password: user.user.password,
        });

        const goalData = await Goal.create({
            ideal_body_type: user.goal.ideal_body_type,
            current_body_type: user.goal.current_body_type,
            target_weight: user.goal.target_weight,
            target_date: user.goal.target_weight,
        });

        const weightData = await Weight.create({
            weight: user.weight.weight,
            age: user.weight.age,
            height: user.weight.height,
        }); 

        const userProfile = {userData, goalData, weightData};

        res.status(200).json(userProfile);

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

        res.render('weigh', {
            ...weights,
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
        res.render('fit', {
            ...fitness,
            logged_in:true
        });
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;
