module.exports = function (sequelize, DataTypes) {
  const EmailError = sequelize.define('EmailError',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      userType: {
        type: DataTypes.STRING,
        allowNull: false
      },
      emailTemplate: {
        type: DataTypes.STRING,
        allowNull: false
      },
      error: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      }
    }, {
      sequelize,
      tableName: 'email_errors',
      timestamps: true,
      paranoid: true,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [
            { name: 'id' }
          ]
        }
      ]
    }
  )

  EmailError.associate = function (models) {

  }

  return EmailError
}
