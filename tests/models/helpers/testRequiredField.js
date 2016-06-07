'use strict';
const expect = require('chai').expect;

module.exports = (models, model, obj, requiredFieldName) => {

  it('requires the field "' + requiredFieldName + '"', () => {
    let updatedObj = JSON.parse(JSON.stringify(obj));
    updatedObj[requiredFieldName] = null;

    return models.sequelize.transaction({ autocommit: false }).then(function (transaction) {
      return model.create(updatedObj, { transaction: transaction })
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
