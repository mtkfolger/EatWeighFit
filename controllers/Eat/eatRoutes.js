const router = require('express').Router();
<<<<<<< Updated upstream
const { Eat, Meal, User } = require('../../models')
const withAuth = require('../../utils/auth');
// const meal_controller = require('../meals/post-meals')
=======
const { Eat, Meal, User } = require('../../models');
const withAuth = require('../../utils/auth');

>>>>>>> Stashed changes

router.get('/', async (req, res) => {
    try {
        const EatData = await Eat.findAll();
        res.status(200).json(eatData);
    } catch (err) {
        res.status(500).json(err);
    }
})
router.post('/', withAuth, async (req, res) => {
    try {
        const newEat = await Eat.create({
            ...req.body,
            user_id: req.session.user_id,
<<<<<<< Updated upstream
=======
        
>>>>>>> Stashed changes
        });

        res.status(200).json(newEat);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/', withAuth, async (req, res) => {
    try {
        const newEat = await Eat.destroy({
            where:{
                id: req.params.id
        }
    })
    res.status(200).end(newEat);
    }catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router
