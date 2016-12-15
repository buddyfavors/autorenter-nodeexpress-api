'use strict';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../server/app');
let expect = chai.expect;

chai.use(chaiHttp);

describe('routes/vehicles', () => {
  describe('/location/:locationId/vehicles', () => {
    it('should pull the json data from the service', () => {
      let expectedOutput = {
        'vehicles': [
          {
            'id': '0b68a1d6-4210-42e0-9647-3747da20a181',
            'locationId': 'c0b694ec-3352-43e3-9f22-77c87fe83d48',
            'vin': '1XKDPB0X04R047346',
            'make': 'Toyota',
            'model': 'Tercel',
            'year': 1990,
            'miles': 452303,
            'color': 'Gold',
            'isRentToOwn': false
          },
          {
            'id': '474086d6-eb1b-4861-9876-de892db743c9',
            'locationId': 'c0b694ec-3352-43e3-9f22-77c87fe83d48',
            'vin': '1HVLPHXM4GHA52708',
            'make': 'Honda',
            'model': 'Civic',
            'year': 1994,
            'miles': 282563,
            'color': 'Silver',
            'isRentToOwn': true
          }
        ]
      };

      chai.request(server)
        .get('/api/locations/c0b694ec-3352-43e3-9f22-77c87fe83d48/vehicles')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.eql(expectedOutput);
        });
    });
  });
  describe('vehicles/:id', () => {
    it('should pull the json data from the service', () => {
      let expectedOutput = {
        'vehicle': {
          'id': '0b68a1d6-4210-42e0-9647-3747da20a181',
          'locationId': 'c0b694ec-3352-43e3-9f22-77c87fe83d48',
          'vin': '1XKDPB0X04R047346',
          'make': 'Toyota',
          'model': 'Tercel',
          'year': 1990,
          'miles': 452303,
          'color': 'Gold',
          'isRentToOwn': false
        }
      };

      chai.request(server)
        .get('/api/vehicles/0b68a1d6-4210-42e0-9647-3747da20a181')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.eql(expectedOutput);
        });
    });
  });
});
