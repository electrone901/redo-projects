const Sequelize = require('Sequelize');
const db = require('./database');

module.exports = db.define('robot', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
  },
  fuelType: {
    type: Sequelize.STRING,
    defaultValue: 'electric',
    validate: {
      isIn: [['gas', 'diesel', 'electric']],
    },
  },

  fuelLevel: {
    type: Sequelize.DOUBLE,
    allowNull: false,
    defaultValue: 100,
    validate: {
      min: 0,
      max: 100,
    },
  },
});
