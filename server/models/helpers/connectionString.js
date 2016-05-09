'use strict';
const config = require('../../config');


function buildConnectionString() {
  const connString = `postgres://${config.postgres.user}:${config.postgres.password}@${config.postgres.host}/${config.postgres.database}`;
  return connString;
}

let connectionString = buildConnectionString();
module.exports = connectionString;
