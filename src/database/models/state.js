const { DataTypes } = require('sequelize');
const sequelize = require('../connection');

class State extends Model {}

State.init({
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  country_id: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  created_at: DataTypes.DATE,
  updated_at: DataTypes.DATE,
}, {
  sequelize,
  modelName: 'states',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
});

module.exports = State;
