'use strict';

module.exports = removeDocument;

const fs = require('fs');
const path = require('path');

function removeDocument(id) {
  const filename = path.join(this.pathname, `${id}.json`);

  try {
    const contents = fs.readFileSync(filename, 'utf8');
    fs.unlinkSync(filename);
    return JSON.parse(contents);
  } catch (err) {
    if (err.code && err.code === 'ENOENT') {
      return null;
    }
    throw err;
  }
}
