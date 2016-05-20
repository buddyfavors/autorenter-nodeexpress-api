'use strict';

module.exports = function (sequelize, DataTypes) {
  var Vehicle = sequelize.define('Vehicle', {
    vin: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    make: {
      type: DataTypes.STRING,
      allowNull: false
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    miles: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rentToOwn: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    image: {
      type: DataTypes.TEXT,
      length: 'long'
    },
    thumbnail: {
      type: DataTypes.TEXT,
      length: 'long'
    }
  }, {
    classMethods: {
      associate: function (models) {
        Vehicle.belongsTo(models.IncentiveGroup, {
          onDelete: 'RESTRICT',
          foreignKey: 'incentiveGroupId'
        });
        Vehicle.belongsTo(models.User, {
          onDelete: 'RESTRICT',
          foreignKey: 'createdBy'
        });
        Vehicle.belongsTo(models.User, {
          onDelete: 'RESTRICT',
          foreignKey: 'updatedBy'
        });
      }
    },
    indexes: [{
      unique: true,
      fields: ['vin']
    }]
  });

  return Vehicle;
};
