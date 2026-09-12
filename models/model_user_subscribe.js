const {DataTypes} = require('sequelize');
const sequelize = require('D:/JavaScript/my-network/db.js');

const userSubscribe = sequelize.define('user_subscribe', {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false        
    },
    subscribeChannel: {
        type: DataTypes.STRING       
    }
});

module.exports = userSubscribe;