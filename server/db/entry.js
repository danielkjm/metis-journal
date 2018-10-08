const db = require('./db');
const Sequelize = require('sequelize');

const Entry = db.define('entry', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true }
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false
  },
  date: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true }
  },
  entry: {
    type: Sequelize.TEXT
  }
});

module.exports = Entry;
