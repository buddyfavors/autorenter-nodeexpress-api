'use strict';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

const skuDataService = require('../../server/services/skuDataService');

chai.should();
chai.use(chaiAsPromised);

describe('skuDataService', () => {
  describe('getData', () => {
    it('returns sku data', () => {
      return skuDataService.getData()
      .then((res) => {
        let expectedOutput = [
          {makeId: 'tsl', modelId: 'tms', year: 2016, color: 'Black'},
          {makeId: 'tsl', modelId: 'tmx', year: 2016, color: 'Black'},
          {makeId: 'tsl', modelId: 'tms', year: 2017, color: 'Black'},
          {makeId: 'tsl', modelId: 'tms', year: 2017, color: 'Silver'},
          {makeId: 'tsl', modelId: 'tmx', year: 2017, color: 'Black'},
          {makeId: 'tsl', modelId: 'tmx', year: 2017, color: 'Silver'},
          {makeId: 'che', modelId: 'cvt', year: 2016, color: 'Black'},
          {makeId: 'che', modelId: 'cvt', year: 2016, color: 'Red'},
          {makeId: 'che', modelId: 'cvt', year: 2017, color: 'Black'},
          {makeId: 'che', modelId: 'cvt', year: 2017, color: 'Red'},
          {makeId: 'frd', modelId: 'fxp', year: 2016, color: 'Black'},
          {makeId: 'frd', modelId: 'fta', year: 2016, color: 'Black'},
          {makeId: 'frd', modelId: 'fta', year: 2016, color: 'Red'},
          {makeId: 'frd', modelId: 'fta', year: 2016, color: 'Silver'},
          {makeId: 'frd', modelId: 'fxp', year: 2017, color: 'Black'},
          {makeId: 'frd', modelId: 'fxp', year: 2017, color: 'Silver'},
          {makeId: 'frd', modelId: 'fta', year: 2017, color: 'Black'},
          {makeId: 'frd', modelId: 'fta', year: 2017, color: 'Red'},
          {makeId: 'frd', modelId: 'fta', year: 2017, color: 'Silver'}
        ];
        res.should.deep.equal(expectedOutput);
      })
      .catch((err) => {
        throw err;
      });
    });
  });
});
