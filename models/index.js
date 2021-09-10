const User = require('./User');
const Eat = require('./Eat');
const Fit = require('./Fit');
const Goal = require('./Goals');
const Meal = require('./Meal');
const Weight = require('./Weight');

Eat.belongsTo(Meal, {
    foreignKey: 'meal_id',
});

Eat.belongsTo(User, {
    foreignKey: 'user_id',
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