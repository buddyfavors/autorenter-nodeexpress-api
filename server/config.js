'use strict';

const config = module.exports = {};

config.server = {
  host: process.env.HOST || '0.0.0.0',
  port: process.env.PORT || 3000
};

config.database = {
  username: process.env.DB_USER || 'auto_renter',
  password: process.env.DB_PASSWORD || 'auto_renter',
  host: process.env.DB_HOST || '192.168.99.100',
  database: process.env.DB_NAME || 'auto_renter',
  dialect: process.env.DB_DIALECT || 'postgres',
  logging: process.env.DB_LOGGING === 'true'
};
