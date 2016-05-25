'use strict';
const expect = require('chai').expect;

module.exports = (models, model, obj1, obj2, uniqueFieldName) => {

  it('requires the field "' + uniqueFieldName + '" to be unique', () => {
    let updatedObj = JSON.parse(JSON.stringify(obj1));
    updatedObj[uniqueFieldName] = obj2[uniqueFieldName];
    return models.sequelize.transaction({ autocommit: false }).then(function (transaction) {
      return model.create(updatedObj, { transaction: transaction })
        .then(() => {
          return model.create(obj2, { transaction: transaction });
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
