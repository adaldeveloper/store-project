module.exports = function (sequelize, DataTypes) {
  const CustomerResetPasswordToken = sequelize.define('CustomerResetPasswordToken',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      customerId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      token: {
        type: DataTypes.STRING,
        allowNull: false
      },
      expirationDate: {
        type: DataTypes.DATE,
        allowNull: false
      },
      used: {
        type: DataTypes.BOOLEAN,
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
      tableName: 'customers_reset_password_tokens',
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
        },
        {
          name: 'customer_reset_password_tokens_customerId_fk',
          using: 'BTREE',
          fields: [
            { name: 'customerId' }
          ]
        }
      ]
    }
  )

  CustomerResetPasswordToken.associate = function (models) {
    CustomerResetPasswordToken.belongsTo(models.Customer, { as: 'customer', foreignKey: 'customerId' })
  }

  return CustomerResetPasswordToken
}
