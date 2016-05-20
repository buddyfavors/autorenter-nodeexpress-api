"use strict";

module.exports = function (sequelize, DataTypes) {
    var ActivityLog = sequelize.define("ActivityLog", {
        refType: {
            type: DataTypes.STRING,
            required: true
        },
        refId: {
            type: DataTypes.INTEGER,
            required: true
        },
        description: {
            type: DataTypes.TEXT,
            required: true
        }
    }, {
            classMethods: {
                associate: function (models) {
                    ActivityLog.belongsTo(models.User, {
                        onDelete: "RESTRICT",
                        foreignKey: 'createdBy'
                    });
                    ActivityLog.belongsTo(models.User, {
                        onDelete: "RESTRICT",
                        foreignKey: 'updatedBy'
                    });
                }
            }
        });

    return ActivityLog;
};
