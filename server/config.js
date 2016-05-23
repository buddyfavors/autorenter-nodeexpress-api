'use strict';

let config = module.exports = {};

config.server = {
  host: process.env.HOST || '0.0.0.0',
  port: process.env.PORT || 3000
};

config.database = {
  username: process.env.DATABASE_USER || 'auto_renter',
  password: process.env.DATABASE_PASSWORD || 'auto_renter',
  host: process.env.DATABASE_HOST || '192.168.99.100',
  database: process.env.DATABASE_DATABASE || 'auto_renter',
  dialect: process.env.DATABASE_DIALECT || 'postgres',
  logging: process.env.DATABASE_LOGGING === 'true'
};
