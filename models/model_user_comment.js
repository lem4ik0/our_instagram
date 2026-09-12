const {DataTypes} = require('sequelize');
const sequelize = require('D:/JavaScript/my-network/db.js');


const userComment = sequelize.define('user_comment', {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
           
    },
    
    
    comment: {
        type: DataTypes.STRING,      
    }

});


module.exports = userComment;