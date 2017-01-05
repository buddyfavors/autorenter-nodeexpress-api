'use strict';

const chai = require('chai');

const lookupDataService = require('../../server/services/lookupDataService');
const errorTypes = require('../../server/models/errorTypes');

chai.should();

describe('lookupDataService', () => {
  describe('getData', () => {
    it('returns color data', () => {
      return lookupDataService.getData(['colors'])
      .then((res) => {
        res.colors.should.have.length.of(5);
        res.colors.every((color) => {
          return color.id && color.value;
        }).should.be.true;
      })
      .catch((err) => {
        throw err;
      });
    });

    it('returns state data', () => {
      return lookupDataService.getData(['states'])
      .then((res) => {
        res.states.should.have.length.of(6);
        res.states.every((state) => {
          return state.stateCode && state.name;
        }).should.be.true;
      })
      .catch((err) => {
        throw err;
      });
    });

    it('returns multiple types of lookup data', () => {
      return lookupDataService.getData(['states', 'colors'])
      .then((res) => {
        res.states.should.have.length.above(0);
        res.colors.should.have.length.above(0);
      })
      .catch((err) => {
        throw err;
      });
    });

    it('throws error if no lookup types are specified', () => {
      return lookupDataService.getData([])
      .then(() => {
        // TODO: Figure out why test failure is not reported...
        console.error('should not be here!'); // eslint-disable-line no-console
        throw new Error('should not be here!');
      })
      .catch((err) => {
        err.should.eql({
          message: 'Use query string vars to specify which types to fetch.',
          errorType: errorTypes.badRequest
        });
      });
    });

    it('throws error if invalid type is specified', () => {
      return lookupDataService.getData(['foobar'])
      .then(() => {
        // TODO: Figure out why test failure is not reported...
        console.error('should not be here!'); // eslint-disable-line no-console
        throw new Error('should not be here!');
      })
      .catch((err) => {
        err.should.eql({
          message: 'The following lookup types do not exist: \'foobar\'.',
          errorType: errorTypes.badRequest
        });
      });
    });
  });
});
