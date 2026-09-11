const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const userSubscribe = sequelize.define('user_subscribe', {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    subscribeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    }
});

module.exports = userSubscribe;