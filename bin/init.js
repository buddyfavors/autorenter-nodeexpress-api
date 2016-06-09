#!/usr/bin/env node
'use strict';

const config = require('../server/config.js');
const Sequelize = require('sequelize');
const models = require('../server/models');
const Promise = require('bluebird');
const debug = require('debug')('sql');

const usersData = require('../fixtures/users.json');
const statesData = require('../fixtures/states.json');
const locationsData = require('../fixtures/locations.json');
const settingsData = require('../fixtures/settings.json');
const incentiveGroupsData = require('../fixtures/incentiveGroups.json');
const vehiclesData = require('../fixtures/vehicles.json');

function initDatabase() {
  const sequelize = new Sequelize('postgres', 'postgres', 'postgres', config.database);

  return sequelize.query('drop database if exists auto_renter')
    .then(() =>
      sequelize.query('select usename from pg_catalog.pg_user where usename = \'auto_renter\'')
        .then(results => {
          if (results[0][0]) {
            return sequelize.query('drop role auto_renter');
          }

          return null;
        }))
    .then(() =>
      sequelize.query('CREATE ROLE auto_renter LOGIN ENCRYPTED PASSWORD \'md5b9c15bc565d32131fcf00c74e707b115\'')) // eslint-disable-line max-len
    .then(() =>
      sequelize.query('CREATE DATABASE auto_renter WITH OWNER = auto_renter'));
}

function error(err) {
  debug(err);
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
  }).then(state => models.Location.create({
    name: location.name,
    siteId: location.siteId,
    city: location.city,
    stateId: state.id
  }))
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
    .then(locations => Promise.map(locations, location => models.IncentiveGroup.create({
      name: incentiveGroup.name,
      priority: incentiveGroup.priority,
      startDate: incentiveGroup.startDate,
      endDate: incentiveGroup.endDate,
      locationId: location.id
    })))
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

initDatabase()
  .then(() => models.sequelize.sync()
      .then(() => Promise.map(statesData, loadState)
          .then(() => Promise.map(locationsData, loadLocation))
          .then(() => Promise.map(usersData, loadUser))
          .then(() => Promise.map(settingsData, loadSetting))
          .then(() => Promise.map(incentiveGroupsData, loadIncentiveGroup))
          .then(() => Promise.map(vehiclesData, loadVehicle))
          .catch(error)));
