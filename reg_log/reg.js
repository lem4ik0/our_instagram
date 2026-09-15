const express = require('express');
const routerSignup = express.Router();
const sqlite = require('D:/JavaScript/my-network/db.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/model_user.js');
routerSignup.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  const existingUser = await User.findOne({ where: { email: email } });
  if (existingUser) {
    return res.status(400).json({
      message: 'User email already exists'
    })}
    const existingUsername = await User.findOne({ where: { username: username } });
  if (existingUsername) {
    return res.status(400).json({
      message: 'Username already exists'
    })
    
  }
  try{
  const hash = await bcrypt.hash(req.body.password, 10);
  
      const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: hash
      })
     const result = await user.save();
     const safeUser = result.toJSON();
     safeUser.password = undefined;
          return res.status(201).json({
            message: 'User created successfully',
            user: safeUser
          })
        
        }catch (err) {
          console.error(err);  
        return res.status(500).json({
          message: 'Error creating user',
          error: err.message
        })
      }
          });
     

module.exports = routerSignup;
