'use strict';

module.exports = function (sequelize, DataTypes) {
  var Location = sequelize.define('Location', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    siteId: {
      type: DataTypes.CHAR(3),
      allowNull: false,
      unique: true
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    stateId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function (models) {
        Location.belongsTo(models.State, {
          onDelete: 'RESTRICT',
          foreignKey: 'stateId'
        });
        Location.hasMany(models.IncentiveGroup, {
          foreignKey: 'locationId'
        });
        Location.belongsTo(models.User, {
          onDelete: 'RESTRICT',
          foreignKey: 'createdBy'
        });
        Location.belongsTo(models.User, {
          onDelete: 'RESTRICT',
          foreignKey: 'updatedBy'
        });
      }
    },
    indexes: [{
      unique: true,
      fields: ['siteId']
    }]

  });

  return Location;
};
