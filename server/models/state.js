'use strict';

module.exports = function (sequelize, DataTypes) {
  var State = sequelize.define('State', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    stateCode: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      unique: true
    }
  }, {
    timestamps: false,
    classMethods: {
      associate: function (models) {
        State.hasMany(models.Location, {
          foreignKey: 'stateId'
        });
      }
    },
    indexes: [{
      unique: true,
      fields: ['stateCode']
    }]
  });

  return State;
};