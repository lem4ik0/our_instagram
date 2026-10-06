require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
const sequelize = require('./db')
const routerSignup = require('../reg_log/reg.js')
const routerLogin = require('../reg_log/log.js')
const routerUpload = require('./upload_route.js')
const path = require('path');

app.use(cors({ origin: 'http://localhost:3000' }))
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/user', routerUpload);
app.use(express.json())
app.use('/user',routerSignup)
app.use('/user',routerLogin)

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