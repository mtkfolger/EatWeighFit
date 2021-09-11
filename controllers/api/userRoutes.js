const router = require('express').Router();
const { User, Weight, Goal } = require('../../models');

router.post('/signup', async (req, res) => {
    console.log('POST SIGNUP')
    try {
        const userData = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        });

        const goalData = await Goal.create({
            ideal_body_type: req.body.ideal_body_type,
            current_body_type: req.body.current_body_type,
            target_weight: req.body.target_weight,
            target_date: req.body.target_weight,
        });

        const weightData = await Weight.create({
            weight: req.body.weight,
            age: req.body.age,
            height: req.body.height,
            user_id: userData.id,
            goal_id: goalData.id,
        });

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/login', async (req, res) => {
    console.log('POST LOGIN')
    try {
        const userData = await User.findOne({ where: {email: req.body.email }});

        if (!userData) {
            res.status(400).json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'You are now logged in!' });
        });

    } catch (err) {
        res.status(400).json(err)
    }
});

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;