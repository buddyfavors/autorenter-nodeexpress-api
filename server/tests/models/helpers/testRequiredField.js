'use strict';

const expect = require('chai').expect;

module.exports = (models, model, obj, requiredFieldName) => {
  it(`requires the field "${requiredFieldName}"`, () => {
    const updatedObj = JSON.parse(JSON.stringify(obj));
    updatedObj[requiredFieldName] = null;

    return models.sequelize.transaction({ autocommit: false })
      .then(transaction =>
        model.create(updatedObj, { transaction })
          .then(() => transaction.rollback())
          .finally(() =>
            (transaction.finished ? null : transaction.rollback())
          )
      )
      .catch(error => {
        expect(error.name).to.equal('SequelizeValidationError');
        expect(error.errors[0].message).to.equal(`${requiredFieldName} cannot be null`);
      });
  });
};
