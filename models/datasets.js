const Sequelize = require('sequelize');
module.exports = function (sequelize) {
    return sequelize.define('datasets', {
        id: {
            type: Sequelize.STRING(45),
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING(45),
            allowNull: true
        },
        filePath: {
            type: Sequelize.STRING(500),
            allowNull: true
        },
        accessLink: {
            type: Sequelize.STRING(500),
            allowNull: true
        },
    }, {
        sequelize,
        tableName: 'datasets',
        timestamps: false,
        indexes: [
            {
                name: 'PRIMARY',
                unique: true,
                using: 'BTREE',
                fields: [
                    { name: 'id' },
                ]
            }
        ]
    }, {
        timestamps: true,
    });
};
