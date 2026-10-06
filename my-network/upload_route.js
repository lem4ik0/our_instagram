const {Router} = require('express');
const fileMiddleware = require('./avatar.js');
const jwt = require('jsonwebtoken');
const User = require('../models/model_user.js');
const router = Router();


router.post('/upload', fileMiddleware.single('avatar'), async (req, res) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) return res.sendStatus(401);

        const { id } = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findByPk(id);
        if (!user) return res.sendStatus(401);
        if (!req.file) return res.status(400).json({ message: 'Изображение не загружено' });

        user.avatar = `/uploads/${req.file.filename}`;
        await user.save();
        return res.json({ avatar: user.avatar });
    } catch (error) {
        console.error(error);
        const status = ['JsonWebTokenError', 'TokenExpiredError'].includes(error.name) ? 401 : 500;
        return res.status(status).json({ message: 'Не удалось загрузить аватар' });
    }
});

module.exports = router;