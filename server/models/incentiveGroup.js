'use strict';

module.exports = (sequelize, DataTypes) => {
  const IncentiveGroup = sequelize.define('IncentiveGroup', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    locationId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    startDate: {
      type: DataTypes.DATEONLY
    },
    endDate: {
      type: DataTypes.DATEONLY
    }
  }, {
    classMethods: {
      associate: models => {
        IncentiveGroup.belongsTo(models.Location, {
          onDelete: 'RESTRICT',
          foreignKey: 'locationId'
        });
        IncentiveGroup.hasMany(models.Vehicle, {
          foreignKey: 'incentiveGroupId'
        });
      }
    }
  });

  return IncentiveGroup;
};
