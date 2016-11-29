'use strict';

module.exports = getAllDocuments;

const fs = require('fs');
const path = require('path');

function getAllDocuments() {
  try {
    return fs.readdirSync(this.pathname)
      .filter((filename) => (/.\.json$/).test(filename))
      .map((filename) => path.join(this.pathname, filename))
      .map((filename) => fs.readFileSync(filename, 'utf8'))
      .map(JSON.parse);
  } catch (err) {
    if (err.code && err.code === 'ENOENT') {
      return [];
    }

    throw err;
  }
}
