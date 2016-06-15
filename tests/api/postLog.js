'use strict';
const app = require('../../server/app');
const chai = require('chai');
const chaiHttp = require('chai-http');
const postData = { username: 'Auto Renter', level: 'Info', message: 'API Test case' };
const path = '/api/log';
const expect = chai.expect;

describe('/api/log', () => {
  chai.use(chaiHttp);
  it('should return 201', () => {
    chai
      .request(app)
      .post(path)
      .set('Accept', 'application/json')
      .send(postData)
      .then((res) => {
        expect(res).to.have.status(201);
      })
      .catch((err) => {
        throw err;
      });
  });
});

