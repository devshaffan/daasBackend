const Sequelize = require('sequelize');
module.exports = function (sequelize) {
  return sequelize.define('knowledgeTracing', {
    id: {
      type: Sequelize.STRING(45),
      allowNull: false,
      primaryKey: true,
    },
    skill_id: {
      type: Sequelize.STRING(45),
      allowNull: false
    },
    skill_name: {
      type: Sequelize.STRING(100),
      allowNull: true
    },
    user_id: {
      type: Sequelize.STRING(45),
      allowNull: true
    },
    correctness : {
        type: Sequelize.TINYINT,
        allowNull: true
    }
  }, {
    sequelize,
    tableName: 'knowledgeTracing',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'id' },
        ]
      },
    ]
  }, {
    timestamps: true,
  });
};
