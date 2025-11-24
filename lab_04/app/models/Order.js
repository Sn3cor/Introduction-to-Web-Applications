const { DataTypes } = require('sequelize')
const sequelize = require('../db')

const Order = sequelize.define('Order', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    bookId: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    tableName: "orders",
    timestamps: false
});

module.exports = Order