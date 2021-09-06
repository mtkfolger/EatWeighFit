const router = require('express').Router();
const { Fit } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
        const fitData = await Fit.findAll();
        res.status(200).json(fitData);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/:id', withAuth, async (req, res) => {
    try {
        const newFit = await Fit.findByPk(req.params.id);

        res.status(200).json(newFit);
    } catch (err) {
        res.json(500).json(err);
    }
});

router.post('/', withAuth, async (req, res) => {
    try {
        const newFit = await Fit.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newFit);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const fitData = await Fit.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!fitData) {
            res.status(404).json({ message: 'No workout found with this id!' });
            return;
        }

        res.status(200).json(fitData);
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;

