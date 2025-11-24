const { DataTypes } = require('sequelize')
const sequelize = require('../db')

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    email: {
        unique: true,
        type: DataTypes.TEXT,
        allowNull: false
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    tableName: "users",
    timestamps: false
});

module.exports = User