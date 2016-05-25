'use strict';

var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');

var config = require('../config.js');

var sequelize = new Sequelize(config.database.database, config.database.username, config.database.password, config.database);
var db = {};

// Load the models.
fs.readdirSync(__dirname).filter(function (file) {
  return (file.indexOf('.') !== 0) && (file !== 'index.js');
}).forEach(function (file) {
  var model = sequelize.import(path.join(__dirname, file));
  db[model.name] = model;
});

// Add the associations.
Object.keys(db).forEach(function (modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

// "Sequelize" maintains a reference to the module, while "sequelize" maintains a reference to the instance being used.
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
