const db = require('../config/db');

exports.subscribe = async (req, res) => {
    try {
        const userId = req.user.id;
        // Ensure we are saving a clean JSON string
        const subscription = typeof req.body === 'string' ? req.body : JSON.stringify(req.body);

        await db.query(
            'INSERT INTO user_subscriptions (user_id, subscription) VALUES (?, ?) ON DUPLICATE KEY UPDATE subscription = VALUES(subscription)',
            [userId, subscription]
        );

        res.status(201).json({ message: 'Subscription saved successfully' });
    } catch (error) {
        console.error('Error saving subscription:', error);
        res.status(500).json({ error: 'Failed to save subscription' });
    }
};
