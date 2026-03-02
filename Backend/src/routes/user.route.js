const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const identifyUser = require('../middleware/auth.middleware');
const Blacklist = require('../models/blacklist');
// Create a new user
router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const existingUser = await User.findOne({
            $or: [{ email }, { username }]
        });

        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            username,
            email,
            password: hashedPassword
        });

        const token = jwt.sign(
            {
                id: newUser._id,
                username: newUser.username,
                email: newUser.email
            },
            process.env.secretkey
        );

        res.cookie('token', token, {
            httpOnly: true,
            secure: true
        });

        return res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
});
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);        
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const token = jwt.sign(
            {
                id: user._id,
                username: user.username,
                email: user.email
            },
            process.env.secretkey
        );

        res.cookie('token', token, {
            httpOnly: true,
            secure: true
        });

        return res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
});
router.get('/me', identifyUser, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
});
router.post('/logout', async (req, res) => {
    res.clearCookie('token');
  const newBlacklistEntry = await Blacklist.create({ 
        token: req.cookies.token });
    return res.status(200).json({ message: 'Logout successful' });
});

module.exports = router;
