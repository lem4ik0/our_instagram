require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const sequelize = require('./db')
const router = require('../reg_log/reg.js')
app.use(express.json())
app.use('/user',router)

app.get('/', (req, res) => {
  res.send('Сервер работает!')
});



const start=async() => {
    try{
       await sequelize.authenticate()
       await sequelize.sync()
       console.log('Database connected')
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
     } catch(e){
        console.log(e)
    }
}
start()