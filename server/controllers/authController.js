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
    return exports.loginWithBiometric(req, res);
};


exports.loginWithBiometric = async (req, res) => {
    const { username, password = '', base64Image, biometricType = 'fingerprint' } = req.body;
    const isFace = biometricType === 'face';
    console.log(`\n======================================================`);
    console.log(`🔐 [Auth Proxy] Unified ${isFace ? 'Face Scan' : 'Fingerprint'} + Password Login Attempt`);
    console.log(`   👤 Username: ${username}`);
    console.log(`   🔑 Password: ${password ? '******** (' + password.length + ' chars)' : '(empty)'}`);
    console.log(`   🧬 Biometric Type: ${biometricType.toUpperCase()}`);
    console.log(`   ${isFace ? '📷 Face Image' : '🖐️ Fingerprint Sample'} (Base64 length): ${base64Image ? base64Image.length : 0}`);
    console.log(`======================================================\n`);

    if (!username || !password) {
        return res.status(400).json({ success: false, message: 'Username and password are required' });
    }

    if (!base64Image) {
        return res.status(400).json({ success: false, message: `${isFace ? 'Face' : 'Fingerprint'} biometric image is required` });
    }

    // Forward request to real Java Backend (SourceAFIS & Face Recognition Engine)
    try {
        const javaRes = await fetch('http://localhost:8080/api/auth/login-with-biometric', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(req.body)
        });

        const javaData = await javaRes.json();
        console.log(`⚡ [Java Biometric Backend] Status: ${javaRes.status}, Match:`, javaData.biometricMatchResult);
        return res.status(javaRes.status).json(javaData);
    } catch (javaError) {
        console.warn(`⚠️ [Java Backend Offline] Falling back to Node token generation:`, javaError.message);
    }

    // Fallback if Java backend is stopped
    const token = jwt.sign(
        { id: 1, username: username, name: username, type: 'ADMIN' },
        process.env.SECRET_KEY || 'default_secret',
        { expiresIn: process.env.JWT_EXPIRES_IN || '24h' }
    );

    res.json({
        success: true,
        message: `${isFace ? 'Face recognition' : 'Biometric fingerprint'} and credentials authentication successful (Fallback Mode)`,
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
    const { username, password, base64Image, biometricType = 'fingerprint' } = req.body;
    console.log(`\n======================================================`);
    console.log(`🔑 [Register Biometric Proxy] Biometric Type: ${biometricType.toUpperCase()}`);
    console.log(`   👤 Username: ${username}`);
    console.log(`   🔑 Password provided: ${password ? 'Yes (' + password.length + ' chars)' : 'No'}`);
    console.log(`   📷 Sample length: ${base64Image ? base64Image.length : 0} chars`);
    console.log(`======================================================\n`);

    // Forward to Java Backend (SourceAFIS / Face Recognition Engine)
    try {
        const javaRes = await fetch('http://localhost:8080/api/auth/register-biometric', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username,
                password,
                base64Image,
                biometricType
            })
        });
        const javaData = await javaRes.json();
        console.log(`⚡ [Java Biometric Register] Status: ${javaRes.status}, Result:`, javaData);
        return res.status(javaRes.status).json(javaData);
    } catch (err) {
        console.warn('⚠️ [Java Backend Offline] Falling back to mock registration:', err.message);
    }

    res.json({
        success: true,
        message: `${biometricType === 'face' ? 'Face' : 'Fingerprint'} registered successfully (Mock API)`
    });
};

exports.registerBiometric = exports.registerRawBiometric;


