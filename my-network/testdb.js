const {Sequalize,DataTypes} = require('sequelize');
const sequelize=require('./db');
const userComment=require('../models/model_user_comment');
const userSubscribe=require('../models/model_user_subscribe');
async function testConnection() {
    try{
        await sequelize.sync();
        console.log('Connection has been established successfully.');
   //await sequelize.sync({ force: true });
    const new_comment = await userComment.create({
        comment: 'This is a test comment',
        userId: 1,       
    });
    console.log('New comment created:', new_comment.userId, new_comment.toJSON());
    const comment = await userComment.findOne({
         where: { userId: 1 },
          order: [['Id', 'DESC']]
        });
    console.log('Comment found:', comment.toJSON());


    const subscribe = await userSubscribe.create({ 
        subscribeChannel: 'test-channel',
        userId: 1
    });
    console.log('New subscriber created:', subscribe.toJSON());
    const foundSubscribe = await userSubscribe.findOne({
         where: { userId: 1 },
         order: [['Id', 'DESC']] 
        });
    console.log('Subscriber found:', foundSubscribe.toJSON());


    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    finally {
        console.log('Closing the database connection...');
        await sequelize.close();
    }
}




testConnection()
