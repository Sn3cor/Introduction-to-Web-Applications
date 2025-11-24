const { DataTypes } = require('sequelize')
const sequelize = require('../db')

const Book = sequelize.define('Book', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    author: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    tableName: "books",
    timestamps: false
});

module.exports = Book