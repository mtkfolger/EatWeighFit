const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Fit extends Model {}

Fit.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    workout_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    longitude: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    latitude: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
    calories_burned: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    current_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
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
    modelName: 'fit',
  }
);

module.exports = Fit;
