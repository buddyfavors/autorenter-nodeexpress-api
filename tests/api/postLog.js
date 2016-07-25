'use strict';
const app = require('../../server/app');
const chai = require('chai');
const chaiHttp = require('chai-http');
const postData = { level: 'info', message: 'API Test case' };
const path = '/api/log';

chai.use(chaiHttp);
chai.should();

describe('/api/log', () => {
  it('should return 201', (done) => {
    chai
      .request(app)
      .post(path)
      .set('Accept', 'application/json')
      .send(postData)
      .end((err, res) => {
        res.should.have.status(201);
        done();
      });
  });
});

