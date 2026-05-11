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
        console.log('🔑 Raw user data from sp_login:', user);

        // Fetch user type from hierarchy if not returned by sp_login
        let userType = user.type;
        if (userType === undefined) {
            try {
                const [hResults] = await db.execute('CALL sp_get_hierarchy_data()');
                const hUsers = hResults[0];
                const foundUser = hUsers.find(u => u.id === user.id);
                if (foundUser) {
                    userType = foundUser.type;
                    console.log(`✅ Found user type in hierarchy: ${userType}`);
                }
            } catch (hError) {
                console.error('⚠️ Could not fetch hierarchy type:', hError);
            }
        }

        // 3. Generate JWT
        const token = jwt.sign(
            { id: user.id, username: username, name: user.name, type: userType },
            process.env.SECRET_KEY,
            { expiresIn: process.env.JWT_EXPIRES_IN }
        );

        res.json({
            token,
            user: { 
                id: user.id, 
                name: user.name, 
                title: user.position_title,
                type: userType
            }
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
