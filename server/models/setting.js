"use strict";

module.exports = function (sequelize, DataTypes) {
    var Setting = sequelize.define("Setting", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        type: {
            type: DataTypes.STRING
        },
        value: {
            type: DataTypes.TEXT,
            length: 'long',
            allowNull: false
        }
    }, {
            classMethods: {
                associate: function (models) {
                    Setting.belongsTo(models.User, {
                        onDelete: "RESTRICT",
                        foreignKey: 'createdBy'
                    });
                    Setting.belongsTo(models.User, {
                        onDelete: "RESTRICT",
                        foreignKey: 'updatedBy'
                    });
                }
            },
            indexes: [{
                unique: true,
                fields: ['name']
            }]
        });

    return Setting;
};
