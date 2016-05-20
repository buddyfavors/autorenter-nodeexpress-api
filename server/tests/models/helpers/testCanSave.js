'use strict';
const expect = require('chai').expect;

module.exports = (models, model, options) => {

    it('can save a ' + model.name, () => {

        return models.sequelize.transaction({ autocommit: false }).then(function (t) {
            return model.create(options, { transaction: t })
                .then(user => {
                    expect(user.id).to.be.greaterThan(0);
                    return t.rollback();
                })
                .finally(() => {
                    if (!t.finished) return t.rollback();
                });
        });

    });
};
