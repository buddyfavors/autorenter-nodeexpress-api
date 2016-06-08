'use strict';
const app = require('../../server/app');
const supertest = require('supertest')(app);

let postData = {
  'username': 'Auto Renter',
  'level':'Info',
  'message':'API Test case'
};

describe('/api/log', function() {
  it('should return 201', function(done) {
    supertest
      .post('/api/log')
      .set('Accept', 'application/json')
      .send(postData)
      .expect('Content-Type', /json/)
      .expect(201)
      .end(done);
  });
});
