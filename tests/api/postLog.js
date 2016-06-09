'use strict';
const app = require('../../server/app');
const supertest = require('supertest')(app);

const postData = {
  username: 'Auto Renter',
  level: 'Info',
  message: 'API Test case'
};

describe('/api/log', () => {
  it('should return 201', (done) => {
    supertest
      .post('/api/log')
      .set('Accept', 'application/json')
      .send(postData)
      .expect('Content-Type', /json/)
      .expect(201)
      .end(done);
  });
});
