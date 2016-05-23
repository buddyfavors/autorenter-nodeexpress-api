#!/usr/bin/env node
'use strict';

var config = require('../server/config.js');
var Sequelize = require('sequelize');

var sequelize = new Sequelize('postgres', 'postgres', 'postgres', config.database);

sequelize.query('CREATE ROLE auto_renter LOGIN ENCRYPTED PASSWORD \'md5b9c15bc565d32131fcf00c74e707b115\'')
  .then(() => {
    return sequelize.query('CREATE DATABASE auto_renter WITH OWNER = auto_renter');
});
