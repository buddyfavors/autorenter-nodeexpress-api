'use strict';
const app = require('../../server/app');
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
chai.should();

describe('/api/raise-error', () => {
  let response;
  before((done) => {
    chai
    .request(app)
    .get('/raise-error')
    .set('Accept', 'application/json')
    .end((err, res) => {
      response = res;
      done();
    });
  });

  it('should return status of 500', () => {
    response.should.have.status(500);
  });

  it('should return correct mesage', () => {
    const expectedMessage = 'Error: An API-originated error for testing purposes.';
    const actualMessage = response.text.substring(0, expectedMessage.length);
    actualMessage.should.equal(expectedMessage);
  });
});
