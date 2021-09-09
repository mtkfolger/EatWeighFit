const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Eat extends Model { }

Eat.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        food_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        calories: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        meal_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "meal",
                key: "id",
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "user",
                key: "id",
            }
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'eat',
    }
);

module.exports = Eat;
