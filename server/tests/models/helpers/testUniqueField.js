'use strict';
const expect = require('chai').expect;

module.exports = (models, model, options1, options2, uniqueFieldName) => {

  it('requires the field "' + uniqueFieldName + '" to be unique', () => {
    let updatedOptions = JSON.parse(JSON.stringify(options1));
    updatedOptions[uniqueFieldName] = options2[uniqueFieldName];
    return models.sequelize.transaction({ autocommit: false }).then(function (t) {
      return model.create(updatedOptions, { transaction: t })
        .then(() => {
          return model.create(options2, { transaction: t });
        })
        .then(() => {
          return t.rollback();
        })
        .finally(() => {
          if (!t.finished) return t.rollback();
        });
    }).catch(error => {
      expect(error.name).to.equal('SequelizeUniqueConstraintError');
      expect(error.errors[0].message).to.equal(uniqueFieldName + ' must be unique');
    });

  });

};
