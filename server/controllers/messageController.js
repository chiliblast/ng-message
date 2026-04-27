const db = require('../config/db');
const webpush = require('web-push');

// Configure Web Push (only if keys are set)
if (process.env.VAPID_PUBLIC_KEY && process.env.VAPID_PRIVATE_KEY) {
    webpush.setVapidDetails(
        process.env.VAPID_EMAIL || 'mailto:admin@example.com',
        process.env.VAPID_PUBLIC_KEY,
        process.env.VAPID_PRIVATE_KEY
    );
} else {
    console.warn('⚠️ Web Push is disabled: VAPID_PUBLIC_KEY or VAPID_PRIVATE_KEY is missing in .env');
}

exports.sendMessage = async (req, res) => {
    const { receiverId, actionId, messageText } = req.body;
    const senderId = req.user.id; 

    try {
        // 1. Save via stored procedure
        const [rows] = await db.query(
            'CALL sp_send_message(?, ?, ?, ?)',
            [senderId, receiverId, actionId, messageText]
        );

        const insertId = rows[0][0].insertId;

        const io = req.app.get('io');
        const connectedUsers = req.app.get('connectedUsers');

        const messageData = {
            id: insertId,
            senderId,
            receiverId,
            actionId,
            messageText,
            timestamp: new Date()
        };

        // 2. Notify receiver if online
        const receiverSocketId = connectedUsers.get(Number(receiverId));
        if (receiverSocketId) {
            io.to(receiverSocketId).emit('new_message', messageData);
        }

        // 3. Notify sender (for blinking effect)
        const senderSocketId = connectedUsers.get(Number(senderId));
        if (senderSocketId) {
            io.to(senderSocketId).emit('message_sent', messageData);
        }

        // 4. Global Broadcast (for Info Messages feed)
        io.emit('global_feed_update', messageData);

        // 5. Web Push Notification
        try {
            console.log(`🔍 Checking push subscription for User ID: ${receiverId}...`);
            const [subRows] = await db.query('SELECT subscription FROM user_subscriptions WHERE user_id = ?', [receiverId]);
            
            if (subRows.length > 0) {
                console.log(`✅ Subscription found! Sending push to User ${receiverId}...`);
                
                // Handle cases where the DB driver might have already parsed the JSON column
                let subscription = subRows[0].subscription;
                if (typeof subscription === 'string') {
                    try {
                        subscription = JSON.parse(subscription);
                    } catch (e) {
                        console.error('Failed to parse subscription string:', subscription);
                        throw e;
                    }
                }

                const payload = JSON.stringify({
                    notification: {
                        title: `New Message from ${req.user.name || req.user.username}`,
                        body: messageText,
                        icon: '/favicon.ico',
                        badge: '/favicon.ico',
                        data: { url: '/messages' }
                    }
                });
                await webpush.sendNotification(subscription, payload);
                console.log('🚀 Push notification sent successfully!');
            } else {
                console.log(`ℹ️ No push subscription found for User ${receiverId}.`);
            }
        } catch (pushError) {
            console.error('❌ Push notification error:', pushError);
        }

        res.json({ success: true, message: 'Message sent successfully', data: messageData });
    } catch (error) {
        console.error('Error sending message:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.getReceivedMessages = async (req, res) => {
    const userId = req.user.id;

    try {
        const [rows] = await db.query('CALL sp_get_received_messages(?)', [userId]);
        res.json(rows[0]);
    } catch (error) {
        console.error('Error fetching messages:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.getSentMessages = async (req, res) => {
    const userId = req.user.id;

    try {
        const [rows] = await db.query('CALL sp_get_sent_messages(?)', [userId]);
        res.json(rows[0]);
    } catch (error) {
        console.error('Error fetching sent messages:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.getAllOtherMessages = async (req, res) => {
    const userId = req.user.id;

    try {
        const [rows] = await db.query('CALL sp_get_all_other_messages(?)', [userId]);
        res.json(rows[0]);
    } catch (error) {
        console.error('Error fetching other messages:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
