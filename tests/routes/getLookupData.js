'use strict';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../server/app');
let expect = chai.expect;

const lookupDataService = require('../../server/services/lookupDataService');
const sinon = require('sinon');

chai.use(chaiHttp);

describe('routes/lookup-data', () => {
  describe('getLookupData', () => {
    const lookupData = {foo: 'bar'};

    describe('for single query string param', () => {
      before(() => {
        sinon.stub(lookupDataService, 'getData',
         (lookupTypes) => new Promise((resolve, reject) => {
           if (lookupTypes.toString() === 'states') {
             resolve(lookupData);
           } else {
             reject('incorrect data passed to factory');
           }
         }));
      });

      it('should fetch data for single lookup type', () => {
        let expectedOutput = {lookupData: lookupData};
        return chai.request(server)
          .get('/api/lookup-data?states')
          .then((res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.be.eql(expectedOutput);
          })
          .catch((err) => {
            throw err;
          });
      });

      after(() => {
        lookupDataService.getData.restore();
      });
    });

    describe('for multiple query string params', () => {
      before(() => {
        sinon.stub(lookupDataService, 'getData',
          (lookupTypes) => new Promise((resolve, reject) => {
            if (lookupTypes.toString() === 'states,colors') {
              resolve(lookupData);
            } else {
              reject('incorrect data passed to factory');
            }
          }));
      });

      it('should fetch data for multiple lookup types', () => {
        let expectedOutput = {lookupData: lookupData};
        return chai.request(server)
          .get('/api/lookup-data?states&colors')
          .then((res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.be.eql(expectedOutput);
          })
          .catch((err) => {
            throw err;
          });
      });

      after(() => {
        lookupDataService.getData.restore();
      });
    });
  });
});
