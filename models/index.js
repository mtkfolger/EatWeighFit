const User = require('./User');
const Eat = require('./Eat');
const Fit = require('./Fit');
const Goal = require('./Goals');
const Meal = require('./Meal');
const Weight = require('./Weight');

Meal.belongsToMany(User, {
    through: {
        model: Eat,
        unique: false
    },
});

User.belongsToMany(Meal, {
    through: {
        model: Eat,
        unique: false
    },
});

Weight.belongsTo(User, {
    foreignKey: 'user_id',
});

Weight.belongsTo(Goal, {
    foreignKey: 'goal_id',
});

Fit.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Eat, Fit, Goal, Weight, Meal };