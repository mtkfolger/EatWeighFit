const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Goals extends Model {}

Goals.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    target_wieght: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    target_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    current_body_type: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    ideal_body_type: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'goals',
  }
);

module.exports = Goals;
