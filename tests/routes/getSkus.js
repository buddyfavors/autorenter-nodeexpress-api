'use strict';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../server/app');
let expect = chai.expect;

chai.use(chaiHttp);

describe('routes/skus', () => {
  describe('getSkus', () => {
    it('should pull the json data from the service', () => {
      let expectedOutput = {
        skus: [
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
        ]
      };

      return chai.request(server)
        .get('/api/skus')
        .then((res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.eql(expectedOutput);
        })
        .catch((err) => {
          throw err;
        });
    });
  });
});
