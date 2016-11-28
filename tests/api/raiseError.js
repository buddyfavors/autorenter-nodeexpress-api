'use strict';
const app = require('../../server/app');
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
chai.should();

it('/api/raise-error should return correct response', () => {
  const expectedMessage = 'Error: An API-originated error for testing purposes.';
  const thePromise = chai
    .request(app)
    .get('/raise-error')
    .set('Accept', 'application/json');

  return thePromise
    .then((res) => { throw res; })
    .catch((err) => {
      const actualMessage = err.response.error.text.substring(0, expectedMessage.length);
      err.response.should.have.status(500);
      actualMessage.should.equal(expectedMessage);
    });
});
