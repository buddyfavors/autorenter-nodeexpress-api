'use strict';
const expect = require('chai').expect;

module.exports = (models, model, options1, options2, uniqueFieldName) => {

  it('requires the field "' + uniqueFieldName + '" to be unique', () => {
    let updatedOptions = JSON.parse(JSON.stringify(options1));
    updatedOptions[uniqueFieldName] = options2[uniqueFieldName];
    return models.sequelize.transaction({ autocommit: false }).then(function (transaction) {
      return model.create(updatedOptions, { transaction: transaction })
        .then(() => {
          return model.create(options2, { transaction: transaction });
        })
        .then(() => {
          return transaction.rollback();
        })
        .finally(() => {
          if (!transaction.finished) return transaction.rollback();
        });
    }).catch(error => {
      expect(error.name).to.equal('SequelizeUniqueConstraintError');
      expect(error.errors[0].message).to.equal(uniqueFieldName + ' must be unique');
    });

  });

};
