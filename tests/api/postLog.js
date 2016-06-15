'use strict';
const app = require('../../server/app');
const chai = require('chai');
const chaiHttp = require('chai-http');
const postData = { username: 'Auto Renter', level: 'Info', message: 'API Test case' };
const path = '/api/log';
const expect = chai.expect;

describe('/api/log', () => {
  chai.use(chaiHttp);
  it('should return 201', (done) => {
    chai
      .request(app)
      .post(path)
      .set('Accept', 'application/json')
      .send(postData)
      .end((err, res) => {
        if (err) done(err);
        expect(res).to.have.status(201);
        done();
      });
  });
});

