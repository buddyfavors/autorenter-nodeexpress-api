'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const server = require('../../server/app');
const expect = chai.expect;

const logDetail = require('../../server/services/logDetail');
const config = require('../../server/config');

chai.use(chaiHttp);

describe('routes/log', () => {
  describe('postLog', () => {
    const username = 'jdoe';
    const message = 'this is the message';
    let executeSpy;
    beforeEach(() => {
      executeSpy = sinon.spy(logDetail, 'execute');
    });

    it('should return 201', () => {
      return chai.request(server)
        .post('/api/log')
        .set('content-type', 'application/json;charset=utf-8')
        .send({message: message})
        .then((res) => {
          expect(res).to.have.status(201);
        })
        .catch((err) => {
          throw err;
        });
    });

    it('should use default level', () => {
      const expectedArgs = [
        username,
        config.server.loggerLevel,
        message
      ];
      return chai.request(server)
        .post('/api/log')
        .set('content-type', 'application/json;charset=utf-8')
        .send({message: message})
        .then((res) => {
          let actualArgs = executeSpy.args[0];
          expect(actualArgs).to.eql(expectedArgs);
        })
        .catch((err) => {
          throw err;
        });
    });

    it('should use provided level', () => {
      const level = 'error';
      const expectedArgs = [
        username,
        level,
        message
      ];
      return chai.request(server)
        .post('/api/log')
        .set('content-type', 'application/json;charset=utf-8')
        .send({message: message, level: level})
        .then((res) => {
          let actualArgs = executeSpy.args[0];
          expect(actualArgs).to.eql(expectedArgs);
        })
        .catch((err) => {
          throw err;
        });
    });

    afterEach(() => {
      executeSpy.restore();
    });
  });
});
