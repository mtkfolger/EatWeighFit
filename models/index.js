const User = require('./User');
const Eat = require('./Eat');
const Fit = require('./Fit');
const Goals = require('./Goals');
const Meal = require('./Meal');
const Weight = require('./Weight');


Meal.hasMany(Eat, {
    foreignKey: 'meal_id',
});

Meal.belongsTo(Eat, {
    foreignKey: 'meal_id',
});

Eat.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Eat, Fit, Goals, };
