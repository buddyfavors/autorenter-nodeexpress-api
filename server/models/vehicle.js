'use strict';

module.exports = function (sequelize, DataTypes) {
  var Vehicle = sequelize.define('Vehicle', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
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
    },
    incentiveGroupId: {
      type: DataTypes.INTEGER
    }
  }, {
    classMethods: {
      associate: function (models) {
        Vehicle.belongsTo(models.IncentiveGroup, {
          onDelete: 'RESTRICT',
          foreignKey: 'incentiveGroupId'
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
