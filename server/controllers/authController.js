const db = require('../config/db');
const jwt = require('jsonwebtoken');
const crypto = require('crypto'); // Use built-in crypto module

exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        // 1. Generate the hash for the typed password using your SECRET_KEY
        const hashedPassword = crypto
            .createHmac('sha256', process.env.SECRET_KEY)
            .update(password)
            .digest('base64');

        // 2. Call stored procedure for login
        const [rows] = await db.execute(
            'CALL sp_login(?, ?)', 
            [username, hashedPassword]
        );

        const users = rows[0]; // SP results are nested in the first element

        if (users.length === 0) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const user = users[0];

        // 3. Generate JWT
        const token = jwt.sign(
            { id: user.id, username: username },
            process.env.SECRET_KEY,
            { expiresIn: process.env.JWT_EXPIRES_IN }
        );

        res.json({
            token,
            user: { id: user.id, name: user.name, title: user.position_title }
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
