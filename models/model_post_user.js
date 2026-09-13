const {DataTypes} = require('sequelize');
const sequelize = require('D:/JavaScript/my-network/db.js');

const PostUser = sequelize.define('PostUser', {
  
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    
  },
  
}, {
  tableName: 'post_users',
  timestamps: true
},
{ text_of_post:  {
    type: DataTypes.STRING,
    
  },
  author: {
    type: DataTypes.STRING,
    allowNull: true 
  },
date_of_post: {
    type: DataTypes.DATE,
    allowNull: true 
  },  
  image_post_url: {
type: DataTypes.STRING,
allowNull: true 
  }
})

module.exports = PostUser;