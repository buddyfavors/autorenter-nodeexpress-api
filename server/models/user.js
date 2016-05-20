"use strict";

module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        firstName: {
            type: DataTypes.STRING
        },
        lastName: {
            type: DataTypes.STRING
        },
        passwordHash: {
            type: DataTypes.STRING
        },
        ldapEnabled: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        },
        userAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        },
        fleetAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        },
        brandingAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        }
    }, {
            classMethods: {
                associate: function (models) {
                    User.belongsTo(models.User, {
                        onDelete: "RESTRICT",
                        foreignKey: 'createdBy'
                    });
                    User.belongsTo(models.User, {
                        onDelete: "RESTRICT",
                        foreignKey: 'updatedBy'
                    });
                }
            },
            indexes: [{
                unique: true,
                fields: ['username']
            }]
        });

    return User;
};
