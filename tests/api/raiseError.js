'use strict';
const app = require('../../server/app');
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
chai.should();

it('/api/raise-error should return correct response', () => {
  const expectedMessage = 'Error: An API-originated error for testing purposes.';
  return chai
    .request(app)
    .get('/api/raise-error')
    .set('Accept', 'application/json')
    .then((res) => { throw res; })
    .catch((err) => {
      const actualMessage = err.response.error.text.substring(0, expectedMessage.length);
      err.response.should.have.status(500);
      actualMessage.should.equal(expectedMessage);
    });
});
