'use strict';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../server/app');
let expect = chai.expect;

chai.use(chaiHttp);

describe('routes/locations', () => {
  describe('locations', () => {
    it('should pull the json data from the model', () => {
      let expectedOutput = {'data': [{ 'id': 'bbf412c4f921d8f23571faadd5bced930f9232ca', 'siteId': '13Z', 'name': 'Loring Seaplane Base', 'vehicleCount': '0', 'city': 'Loring', 'stateCode': 'AK' }]};

      chai.request(server)
        .get('/api/locations')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.eql(expectedOutput);
        });
    });
  });
  describe('location/:id', () => {
    it('should pull the json data from the model', () => {
      let expectedOutput = {'data': { 'id': 'bbf412c4f921d8f23571faadd5bced930f9232ca', 'siteId': '13Z', 'name': 'Loring Seaplane Base', 'vehicleCount': '0', 'city': 'Loring', 'stateCode': 'AK' }};

      chai.request(server)
        .get('/api/locations/bbf412c4f921d8f23571faadd5bced930f9232ca')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.eql(expectedOutput);
        });
    });
  });
});
