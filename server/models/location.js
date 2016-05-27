'use strict';

module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    siteId: {
      type: DataTypes.STRING,
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
      associate: models => {
        Location.belongsTo(models.State, {
          onDelete: 'RESTRICT',
          foreignKey: 'stateId'
        });
        Location.hasMany(models.IncentiveGroup, {
          foreignKey: 'locationId'
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
