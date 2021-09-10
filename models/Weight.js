const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Weight extends Model {}

Weight.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    weight: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    height: {
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
    goal_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "goal",
            key: "id",
        }
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'weight',
  }
);

module.exports = Weight;
