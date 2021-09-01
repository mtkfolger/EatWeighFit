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
    Weight: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    age: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    current_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "user",
            key: "id",
        }
    },
    goals_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "goals",
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
