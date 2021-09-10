const router = require('express').Router();
const { Weight, User, Goal } = require('../../../models');
const withAuth = require('../../../utils/auth');

router.get('/', withAuth, async (req, res) => {
    // try {
        const weighData = await Weight.findAll({
            include: [
                {
                    model: User,
                    
                },
                {
                    model: Goal,
                    attributes: ['target_weight', 'target_date', 'current_body_type', 'ideal_body_type']
                    
                }
            ],
        });

        const weight = weighData.map((weigh) => weigh.get({ plain: true }));

        res.json(weight);
    // } catch (err) {
    //     res.status(500).json(err);
    // }
});

router.get('/:id', withAuth, async (req, res) => {
    try {
        const weighData = await Weight.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });

        const weight = weighData.get({ plain: true });

        res.json(weight);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', withAuth, async (req, res) => {
    try {
        const newWeight = await Weight.create({
            ...req.body,
            user_id:req.session.user_id,
        });

        res.status(200).json(newWeight);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const weighData = await Weight.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!weighData) {
            res.status(404).json({ message: 'No weight found with this id!' });
            return;
        }

        res.status(200).json(weighData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
