// needs post method 
// put method 
// get method
// delete method
const router = require('express').Router();
// const { route } = require('.');
const { Meal } = require('../../../../models');
const withAuth = require('../../../../utils/auth');
// const eat_controller = require('../eat/post-eat')

// GET route
router.get('/', async (req, res) => {
    try {
        const mealData = await Meal.findAll();
        res.status(200).json(mealData);
    } catch (err) {
        res.status(500).json(err);
    }
})
router.post('/', withAuth, async (req, res) => {
    try {
        const newMeal = await Meal.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newMeal);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/', withAuth, async (req, res) => {
    try {
        const newMeal = await Meal.destroy({
            where:{
                id: req.params.id
        }
    })
    res.status(200).end(newMeal);
    }catch (err) {
        res.status(400).json(err);
    }
})

module.exports = router

