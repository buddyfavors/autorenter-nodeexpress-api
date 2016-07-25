'use strict';

const expect = require('chai').expect;

module.exports = (models, model, obj) => {
  it(`can save a ${model.name}`, () =>
    models.sequelize.transaction({ autocommit: false })
      .then(transaction =>
        model.create(obj, { transaction })
          .then(newObject => {
            expect(newObject.id).to.be.greaterThan(0);
            return transaction.rollback();
          })
          .finally(() => (transaction.finished ? null : transaction.rollback()))
      )
  );
};
