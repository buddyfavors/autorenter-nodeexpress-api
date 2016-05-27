'use strict';

module.exports = (sequelize, DataTypes) => {
  const State = sequelize.define('State', {
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
      /* eslint-disable new-cap */
      type: DataTypes.CHAR(2),
      /* eslint-enable new-cap */
      allowNull: false,
      unique: true
    }
  }, {
    timestamps: false,
    classMethods: {
      associate: models => {
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
