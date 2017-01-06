'use strict';

const chai = require('chai');

const lookupDataService = require('../../server/services/lookupDataService');
const errorTypes = require('../../server/models/errorTypes');

chai.should();

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
          return model.id && model.makeId && model.name;
        }).should.be.true;
      })
      .catch((err) => {
        throw err;
      });
    });

    it('returns color data', () => {
      return lookupDataService.getData(['colors'])
      .then((res) => {
        res.colors.should.have.length.of(3);
        res.colors.every((color) => {
          return color.id && color.value;
        }).should.be.true;
      })
      .catch((err) => {
        throw err;
      });
    });

    it('returns vehicle lookup data rules', () => {
      return lookupDataService.getData(['vehicle_rules'])
      .then((res) => {
        res.vehicle_rules.should.have.length.of(19);
        res.vehicle_rules.every((vehicleLookupDataRule) => {
          return vehicleLookupDataRule.makeId && vehicleLookupDataRule.modelId &&
            vehicleLookupDataRule.year && vehicleLookupDataRule.colorId;
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
