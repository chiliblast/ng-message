const db = require('../config/db');

exports.getStatusActions = async (req, res) => {
    try {
        const [rows] = await db.query('CALL sp_get_status_actions()');
        res.json(rows[0]);
    } catch (error) {
        console.error('Database error:', error);
        res.status(500).json({ message: 'Error fetching status actions' });
    }
};
