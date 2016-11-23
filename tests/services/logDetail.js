'use strict';
const chai = require('chai');
const logDetail = require('../../server/services/logDetail');

const assert = chai.assert;

describe('services/log', () => {
  it('should save log in db', () =>
    logDetail.execute('Auto Renter', 'Info', 'Service call Test')
      .then(() => {
        assert(true);
      }));
});
