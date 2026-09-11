const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const PostUser = sequelize.define('PostUser', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id'
    }
  },
  postId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Posts',
      key: 'id'
    }
  }
}, {
  tableName: 'post_users',
  timestamps: true
},
{ text_of_post:  {
    type: DataTypes.STRING,
    allowNull: true
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