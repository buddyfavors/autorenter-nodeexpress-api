'use strict';

const config = module.exports = {};
const path = require('path');

config.server = {
  host: process.env.HOST || '0.0.0.0',
  port: process.env.PORT || 3000,
  jsonFilesBasePath: path.resolve(__dirname, './data'),
};
