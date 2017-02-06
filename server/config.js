'use strict';

const config = module.exports = {};

config.server = {
  host: process.env.HOST || '0.0.0.0',
  port: process.env.PORT || 3000,
  loggerLevel: process.env.LOGGER_LEVEL || 'debug',
  title: process.env.npm_package_name,
  version: process.env.npm_package_version,
  description: process.env.npm_package_description
};
