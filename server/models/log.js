'use strict';

module.exports = function (sequelize, DataTypes) {
  var Log = sequelize.define('Log', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal("(now() at time zone 'utc')")
    },
    level: {
      type: DataTypes.STRING,
      allowNull: false
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false
    }
      });

  return Log;
};



