const jwt = require('jsonwebtoken');
const Blacklist = require('../models/blacklist');
const redis = require('../db/redis');
const identifyUser = async (req, res, next) => {
    const tokenFromCookie = req.cookies?.token;
    const tokenFromHeader = req.headers.authorization?.startsWith('Bearer ')
        ? req.headers.authorization.split(' ')[1]
        : null;
    const token = tokenFromCookie || tokenFromHeader;
        const blacklistedToken = await redis.get(token);
    if (blacklistedToken) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, process.env.secretkey);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Unauthorized' }); 

    }
    }

module.exports = identifyUser;
