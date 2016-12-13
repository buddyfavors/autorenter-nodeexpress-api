'use strict';

module.exports = getDocument;

const fs = require('fs');
const path = require('path');

function getDocument(id) {
  const filename = path.join(this.pathname, `${id}.json`);

  try {
    const contents = fs.readFileSync(filename, 'utf8');
    return JSON.parse(contents);
  } catch (err) {
    if (err.code && err.code === 'ENOENT') {
      return null;
    }
    throw err;
  }
}
