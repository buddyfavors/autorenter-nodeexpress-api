'use strict';

module.exports = function (sequelize, DataTypes) {
  var AutoRenter_Log = sequelize.define('AutoRenter_Log', {
    ID: {
      type: DataTypes.INTEGER, 
      primaryKey: true,
      autoIncrement: true
    },
    UserName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Timestamp: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal("(now() at time zone 'utc')")
    },
    Level: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Message: {
      type: DataTypes.STRING,
      allowNull: false
    }
      });

  return AutoRenter_Log;
};



