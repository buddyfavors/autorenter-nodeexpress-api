#!/usr/bin/env node
'use strict';

var config = require('../server/config.js');
var Sequelize = require('sequelize');
const models = require('../server/models');
var Promise = require('bluebird');

function initDatabase() {

  let sequelize = new Sequelize('postgres', 'postgres', 'postgres', config.database);

  return sequelize.query('drop database if exists auto_renter')
    .then(() => {
      return sequelize.query('select usename from pg_catalog.pg_user where usename = \'auto_renter\'')
        .then(results => {
          if (results[0][0]) {
            return sequelize.query('drop role auto_renter');
          }
        });
    })
    .then(() => {
      return sequelize.query('CREATE ROLE auto_renter LOGIN ENCRYPTED PASSWORD \'md5b9c15bc565d32131fcf00c74e707b115\'');
    })
    .then(() => {
      return sequelize.query('CREATE DATABASE auto_renter WITH OWNER = auto_renter');
    });

}

function error(error) {
  console.error(error);
  process.exit(1);
}

function loadState(state) {
  return models.State.create({
    name: state.name,
    stateCode: state.stateCode
  })
    .catch(error);
}

function loadLocation(location) {
  return models.State.findOne({
    where: {
      stateCode: location.stateCode
    }
  }).then(state => {
    return models.Location.create({
      name: location.name,
      siteId: location.siteId,
      city: location.city,
      stateId: state.id
    });
  })
    .catch(error);
}

function loadUser(user) {
  return models.User.create({
    username: user.username,
    ldapEnabled: user.isLdapEnabled,
    userAdmin: user.isUserAdmin,
    fleetAdmin: user.isFleetAdmin,
    brandAdmin: user.isBrandAdmin,
    email: user.email
  })
    .catch(error);
}

function loadSetting(setting) {
  return models.Setting.create({
    name: setting.name,
    type: setting.type,
    value: setting.value
  })
    .catch(error);
}

function loadIncentiveGroup(incentiveGroup) {
  return models.Location.findAll()
    .then(locations => {
      return Promise.map(locations, location => {
        return models.IncentiveGroup.create({
          name: incentiveGroup.name,
          priority: incentiveGroup.priority,
          startDate: incentiveGroup.startDate,
          endDate: incentiveGroup.endDate,
          locationId: location.id
        });
      });
    })
    .catch(error);

}

function loadVehicle(vehicle) {
  return models.Vehicle.create({
    vin: vehicle.vin,
    make: vehicle.make,
    model: vehicle.model,
    year: vehicle.year,
    miles: vehicle.miles,
    color: vehicle.color,
    rentToOwn: vehicle.isRentToOwn,
    image: vehicle.image,
    thumbnail: vehicle.thumbnail
  })
    .catch(error);
}

function dropTables() {
  return models.Vehicle.drop()
    .then(() => { return models.IncentiveGroup.drop(); })
    .then(() => { return models.Location.drop(); })
    .then(() => { return models.State.drop(); })
    .then(() => { return models.Setting.drop(); })
    .then(() => { return models.ActivityLog.drop(); })
    .then(() => { return models.User.drop(); })
}

initDatabase()
.then(() => {
  return models.sequelize.sync()
    .then(() => {

      var users = require('../fixtures/users.json');
      var states = require('../fixtures/states.json');
      var locations = require('../fixtures/locations.json');
      var settings = require('../fixtures/settings.json');
      var incentiveGroups = require('../fixtures/incentiveGroups.json');
      var vehicles = require('../fixtures/vehicles.json');

      return Promise.map(states, loadState)
        .then(() => { return Promise.map(locations, loadLocation); })
        .then(() => { return Promise.map(users, loadUser); })
        .then(() => { return Promise.map(settings, loadSetting); })
        .then(() => { return Promise.map(incentiveGroups, loadIncentiveGroup); })
        .then(() => { return Promise.map(vehicles, loadVehicle); })
        .catch(error);
    });
});
