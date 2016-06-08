'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const config = require('../config.js');

const sequelize = new Sequelize(
  config.database.database,
  config.database.username,
  config.database.password,
  config.database
);

const db = {};

// Load the models.
fs.readdirSync(__dirname).filter(file =>
  (file.indexOf('.') !== 0) && (file !== 'index.js')
).forEach(file => {
  const model = sequelize.import(path.join(__dirname, file));
  db[model.name] = model;
});

// Add the associations.
Object.keys(db).forEach(modelName => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

// "Sequelize" maintains a reference to the module,
// while "sequelize" maintains a reference to the instance being used.
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
