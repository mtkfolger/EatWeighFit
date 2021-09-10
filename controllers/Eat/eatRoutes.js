const router = require('express').Router();
<<<<<<< HEAD
const { Eat, Meal, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
        const EatData = await Eat.findAll();
=======
const { Eat, Meal, User } = require('../..
const withAuth = require('../../utils/au
// const meal_controller = require('../m

router.get('/', async (req, res) => {
    try {
        const EatData = await Eat.findAl
>>>>>>> main
        res.status(200).json(eatData);
    } catch (err) {
        res.status(500).json(err);
    }
})
<<<<<<< HEAD
router.post('/', withAuth, async (req, res) => {
    try {
        const newEat = await Eat.create({
            ...req.body,
            user_id: req.session.user_id,
=======
router.post('/', withAuth, async (req, r
    try {
        const newEat = await Eat.create(
            ...req.body,
            user_id: req.session.user_id
>>>>>>> main
        });

        res.status(200).json(newEat);
    } catch (err) {
        res.status(400).json(err);
    }
});

<<<<<<< HEAD
router.delete('/', withAuth, async (req, res) => {
    try {
        const newEat = await Eat.destroy({
=======
router.delete('/', withAuth, async (req,
    try {
        const newEat = await Eat.destroy
>>>>>>> main
            where:{
                id: req.params.id
        }
    })
    res.status(200).end(newEat);
    }catch (err) {
        res.status(400).json(err);
    }
<<<<<<< HEAD
});
=======
})
>>>>>>> main

module.exports = router
