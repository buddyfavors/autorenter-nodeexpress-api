'use strict';
const expect = require('chai').expect;

module.exports = (models, model, options, requiredFieldName) => {

  it('requires the field "' + requiredFieldName + '"', () => {
    let updatedOptions = JSON.parse(JSON.stringify(options));
    updatedOptions[requiredFieldName] = null;

    return models.sequelize.transaction({ autocommit: false }).then(function (transaction) {
      return model.create(updatedOptions, { transaction: transaction })
        .then(() => {
          return transaction.rollback();
        })
        .finally(() => {
          if (!transaction.finished) return transaction.rollback();
        });
    }).catch(error => {
      expect(error.name).to.equal('SequelizeValidationError');
      expect(error.errors[0].message).to.equal(requiredFieldName + ' cannot be null');

    });
  });

};
