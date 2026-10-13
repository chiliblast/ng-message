const db = require('../config/db');
const jwt = require('jsonwebtoken');
const crypto = require('crypto'); // Use built-in crypto module

exports.login = async (req, res) => {
    const { username, password = '' } = req.body;

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
        console.error('❌ Login Error:', error);
        res.status(500).json({ message: 'Server error', error: error.message || error });
    }
};

exports.loginRawBiometric = async (req, res) => {
    const { username, password = '', base64Image } = req.body;
    console.log(`\n======================================================`);
    console.log(`🔐 [Mock API] Raw Biometric Login requested:`);
    console.log(`   👤 Username: ${username}`);
    console.log(`   🔑 Password: ${password ? '******** (' + password.length + ' chars)' : '(empty)'}`);
    console.log(`   🖐️ Biometric Sample (Base64 length): ${base64Image ? base64Image.length : 0}`);
    console.log(`======================================================\n`);
    
    // In a real application, you would send this base64Image to an AFIS (Automated Fingerprint Identification System)
    // to match against enrolled templates. For this mock, we just approve it.
    
    res.json({
        success: true,
        message: "Biometric and credentials authentication successful!",
        accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjQ4MjkyMDk2MDB9.mock-signature",
        refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjQ4MjkyMDk2MDB9.mock-signature",
        loginLogId: 1,
        groupUserUuid: "group_user_uuid",
        appUserModel: {
            id: 1,
            uuid: "mock-user-uuid",
            role: "ADMIN",
            defaultUsername: username,
            displayName: username.toUpperCase(),
            shortName: username,
            username: username
        }
    });
};

exports.loginWithBiometric = async (req, res) => {
    const { username, password = '', base64Image } = req.body;
    console.log(`\n======================================================`);
    console.log(`🔐 [Mock API] Unified Biometric + Password Login Attempt`);
    console.log(`   👤 Username: ${username}`);
    console.log(`   🔑 Password: ${password ? '******** (' + password.length + ' chars)' : '(empty)'}`);
    console.log(`   🖐️ Biometric Sample (Base64 length): ${base64Image ? base64Image.length : 0}`);
    console.log(`======================================================\n`);

    if (!username || !password) {
        return res.status(400).json({ success: false, message: 'Username and password are required' });
    }

    if (!base64Image) {
        return res.status(400).json({ success: false, message: 'Fingerprint biometric image is required' });
    }

    // In a production backend, server validates password hash + AFIS fingerprint match
    const token = jwt.sign(
        { id: 1, username: username, name: username, type: 'ADMIN' },
        process.env.SECRET_KEY || 'default_secret',
        { expiresIn: process.env.JWT_EXPIRES_IN || '24h' }
    );

    res.json({
        success: true,
        message: "Biometric and credentials authentication successful!",
        accessToken: token,
        refreshToken: token,
        loginLogId: 1,
        groupUserUuid: "group_user_uuid",
        appUserModel: {
            id: 1,
            uuid: "mock-user-uuid",
            role: "ADMIN",
            defaultUsername: username,
            displayName: username.toUpperCase(),
            shortName: username,
            username: username
        }
    });
};

exports.registerRawBiometric = async (req, res) => {
    const { userId, username, password, base64Image } = req.body;
    console.log(`🔑 [Mock API] Raw Biometric Registration requested for username:`, username);
    console.log(`🔑 [Mock API] Base64 Image for ${username}:`, base64Image);
    
    // In a real application, you would send this base64Image to an AFIS to extract minutiae and save the template
    // to the database, associated with this userId.
    
    res.json({
        success: true,
        message: "Raw Biometric registered successfully (Mock API)"
    });
};

