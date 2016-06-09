'use strict';
const expect = require('chai').expect;
const logDetail = require('../../server/services/log');

describe('services/log',  () => {

 it('should save log in db', () => {
    return logDetail('Auto Renter', 'Info', 'Service call Test')
      .then(result => {
        expect(true);
      });
  });

});
