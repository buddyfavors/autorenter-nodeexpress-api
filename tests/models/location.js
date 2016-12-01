'use strict';

const assert = require('assert');
const getAllLocations = require('../../server/routes/locations/getAllLocations');

describe('models/Location', () => {
  it('needs more tests', () => {
    assert(false);
  });
  describe('getAllLocations', () => {
    it('should pull the json data from the model', () => {
      let expectedOutput = [{ 'id': 'bbf412c4f921d8f23571faadd5bced930f9232ca', 'siteId': '13Z', 'name': 'Loring Seaplane Base', 'vehicles': '0', 'city': 'Loring', 'stateCode': 'AK' }];
      let actualOutput = null;
      const request = {};
      let response = {
        header: {},
      };
      response.setHeader = function setHeader(key, val) {
        this.header[key] = val;
      };
      response.send = function send(data) {
        actualOutput = data;
      };
      getAllLocations(request, response);
      assert.deepEqual(actualOutput, expectedOutput);
    });
  });
});
