'use strict';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

const lookupDataService = require('../../server/services/lookupDataService');
const errorTypes = require('../../server/models/errorTypes');

chai.should();
chai.use(chaiAsPromised);

describe('lookupDataService', () => {
  describe('getData', () => {
    it('returns state data', () => {
      return lookupDataService.getData(['states'])
      .then((res) => {
        res.states.should.have.length.of(5);
        res.states.every((state) => {
          return state.stateCode && state.name;
        }).should.be.true;
      })
      .catch((err) => {
        throw err;
      });
    });

    it('returns vehicle make data', () => {
      return lookupDataService.getData(['makes'])
      .then((res) => {
        res.makes.should.have.length.of(3);
        res.makes.every((make) => {
          return make.id && make.name;
        }).should.be.true;
      })
      .catch((err) => {
        throw err;
      });
    });

    it('returns vehicle model data', () => {
      return lookupDataService.getData(['models'])
      .then((res) => {
        res.models.should.have.length.of(5);
        res.models.every((model) => {
          return model.id && model.name;
        }).should.be.true;
      })
      .catch((err) => {
        throw err;
      });
    });

    it('returns color data', () => {
      return lookupDataService.getData(['colors'])
      .then((res) => {
        res.colors.should.deep.equal(['Black', 'Red', 'Silver']);
      })
      .catch((err) => {
        throw err;
      });
    });

    it('returns vehicles', () => {
      return lookupDataService.getData(['vehicles'])
      .then((res) => {
        res.vehicles.should.have.length.of(19);
        res.vehicles.every((vehicle) => {
          return vehicle.makeId && vehicle.modelId &&
            vehicle.year && vehicle.color;
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
      const err = {
        message: 'Use query string vars to specify which types to fetch.',
        errorType: errorTypes.badRequest
      };
      return lookupDataService.getData([])
        .should.eventually.be.rejectedWith(err.message)
        .and.have.property('errorType', err.errorType);
    });

    it('throws error if invalid type is specified', () => {
      const err = {
        message: 'The following lookup types do not exist: \'foobar\'.',
        errorType: errorTypes.badRequest
      };
      return lookupDataService.getData(['foobar'])
        .should.eventually.be.rejectedWith(err.message)
        .and.have.property('errorType', err.errorType);
    });
  });
});
