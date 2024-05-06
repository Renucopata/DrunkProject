const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Convocatoria = sequelize.define('Convocatoria', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('pending', 'completed'),
        defaultValue: 'pending',
    },
    // Add any other necessary fields
});

module.exports = Convocatoria;