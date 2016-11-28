'use strict';

module.exports = getAllDocuments;

const fs = require('fs');
const path = require('path');

function getAllDocuments(pathname) {
  try {
    return fs.readdirSync(pathname)
      .filter(filename => (/.\.json$/).test(filename))
      .map(filename => path.join(pathname, filename))
      .map(filename => fs.readFileSync(filename, 'utf8'))
      .map(JSON.parse);
  } catch (err) {
    if (err.code && err.code === 'ENOENT') {
      return [];
    }

    throw err;
  }
}
