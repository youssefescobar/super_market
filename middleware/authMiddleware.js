const jwt = require('jsonwebtoken');
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;

const auth = async (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(400).json({ message: 'No token, authorization denied' });
    }

    try {
        const pureToken = token.split(' ')[1];
        const decoded = jwt.verify(pureToken, JWT_SECRET);
        req.user = decoded;
        req.userId = decoded.id // lol ill clean it up later
        console.log('Auth token:', token);
console.log('Decoded token:', decoded);
console.log('req.userId:', req.userId);

        next();
    } catch (err) {
        res.status(400).json({ message: 'Invalid token' });
    }
}

module.exports = auth;
