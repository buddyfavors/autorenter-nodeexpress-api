'use strict';
const expect = require('chai').expect;

module.exports = (models, model, obj1, obj2, uniqueFieldName) => {
  it(`requires the field "${uniqueFieldName}" to be unique`, () => {
    const updatedObj = JSON.parse(JSON.stringify(obj1));
    updatedObj[uniqueFieldName] = obj2[uniqueFieldName];
    return models.sequelize.transaction({ autocommit: false })
      .then(transaction =>
        model.create(updatedObj, { transaction })
          .then(() => model.create(obj2, { transaction }))
          .then(() => transaction.rollback())
          .finally(() =>
            (transaction.finished ? null : transaction.rollback())
          )
      )
      .catch(error => {
        expect(error.name).to.equal('SequelizeUniqueConstraintError');
        expect(error.errors[0].message).to.equal(`${uniqueFieldName} must be unique`);
      });
  });
};
