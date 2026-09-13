const express = require('express');
const router = express.Router();
const sqlite = require('D:/JavaScript/my-network/db.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/model_user.js');
router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  try{
  const hash = await bcrypt.hash(req.body.password, 10);
  
      const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: hash
      });
     const result = await user.save();
          return res.status(201).json({
            message: 'User created successfully',
            user: result
          });
        
        }catch (err) {
          console.error(err);  
        return res.status(500).json({
          message: 'Error creating user',
          error: err.message
        });
      }
          });
     

module.exports = router;
