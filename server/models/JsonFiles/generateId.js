'use strict';

module.exports = generateId;

const crypto = require('crypto');

function generateId(data) {
  const hash = crypto.createHash('sha1');
  hash.update(Date.now().toString());
  if (data !== undefined) {
    hash.update(JSON.stringify(data));
  }

  return hash.digest('hex');
}
