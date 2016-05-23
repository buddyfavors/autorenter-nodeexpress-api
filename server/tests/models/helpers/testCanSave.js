'use strict';
const expect = require('chai').expect;

module.exports = (models, model, options) => {

  it('can save a ' + model.name, () => {

    return models.sequelize.transaction({ autocommit: false }).then(function (transaction) {
      return model.create(options, { transaction: transaction })
        .then(user => {
          expect(user.id).to.be.greaterThan(0);
          return transaction.rollback();
        })
        .finally(() => {
          if (!transaction.finished) return transaction.rollback();
        });
    });

  });
};
