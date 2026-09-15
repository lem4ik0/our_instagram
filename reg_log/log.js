const express = require('express');
const routerLogin = express.Router();
const sqlite = require('D:/JavaScript/my-network/db.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/model_user.js');
routerLogin.post('/login', async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ where: { email: email } });
        if (!user) {
            return res.status(401).json({
                message: 'Authentication failed. User not found.'
            });
        }
        else if (user) {
            const isMatch = await bcrypt.compare(req.body.password, user.password);
            if (!isMatch) {
                return res.status(401).json({
                    message: 'Authentication failed. Incorrect password.'
                });
            }
            else {
                const token = jwt.log({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
                return res.status(200).json({
                    message: 'Authentication successful.',
                    token: token
                });
            }
        }
    } catch (error) {
        return res.status(500).json({
            message: 'An error occurred during authentication.'
        });
    }
});
module.exports = routerLogin;