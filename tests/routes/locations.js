'use strict';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../server/app');
let expect = chai.expect;

chai.use(chaiHttp);

describe('routes/locations', () => {
  describe('locations', () => {
    it('should pull the json data from the service', () => {
      let expectedOutput = {
        'locations': [
          {
            'id': 'c0b694ec-3352-43e3-9f22-77c87fe83d48',
            'siteId': 'ind',
            'name': 'Indianapolis International Airport',
            'city': 'Indianapolis',
            'stateCode': 'IN',
            'vehicleCount': 2
          },
          {
            'id': 'dc95a8f9-713f-4aed-bf5e-4e5567c4dd9f',
            'siteId': 'lax',
            'name': 'Los Angeles International Airport',
            'city': 'Los Angeles',
            'stateCode': 'CA',
            'vehicleCount': 2
          }
        ]
      };

      return chai.request(server)
        .get('/api/locations')
        .then((res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.eql(expectedOutput);
        })
        .catch((err) => {
          throw err;
        });
    });
  });
  describe('location/:id', () => {
    it('should pull the json data from the service', () => {
      let expectedOutput = {
        'location': {
          'id': 'c0b694ec-3352-43e3-9f22-77c87fe83d48',
          'siteId': 'ind',
          'name': 'Indianapolis International Airport',
          'city': 'Indianapolis',
          'stateCode': 'IN',
          'vehicleCount': 2
        }
      };

      return chai.request(server)
        .get('/api/locations/c0b694ec-3352-43e3-9f22-77c87fe83d48')
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
