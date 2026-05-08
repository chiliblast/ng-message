const db = require('../config/db');

exports.bulkSave = async (req, res) => {
    try {
        const locations = req.body;

        if (!Array.isArray(locations) || locations.length === 0) {
            return res.status(400).json({ error: 'No locations provided' });
        }

        // Saving as Global Locations (No User ID binding)
        let addedCount = 0;
        for (const loc of locations) {
            const [results] = await db.execute(
                'CALL sp_save_global_location(?, ?, ?, ?)',
                [loc.name, loc.latitude, loc.longitude, loc.address || '']
            );
            
            // Check the status returned by the SP (results[0][0].status)
            if (results[0] && results[0][0] && results[0][0].status === 1) {
                addedCount++;
            }
        }

        const message = addedCount > 0 
            ? `${addedCount} new locations saved successfully` 
            : 'No new locations were added (duplicates skipped)';

        res.status(201).json({ success: true, message: message });
    } catch (error) {
        console.error('Error saving global locations:', error);
        res.status(500).json({ error: 'Failed to save global locations' });
    }
};

exports.getLocations = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const offset = (page - 1) * limit;

        // Calling the Global Registry SP
        const [results] = await db.execute(
            'CALL sp_get_all_locations(?, ?)',
            [limit, offset]
        );

        const total = results[0][0].total;
        const data = results[1];

        res.json({
            data: data,
            pagination: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit)
            }
        });
    } catch (error) {
        console.error('Error fetching global locations:', error);
        res.status(500).json({ error: 'Failed to fetch global registry' });
    }
};

exports.addLocation = async (req, res) => {
    try {
        const { name, latitude, longitude, address } = req.body;
        await db.execute(
            'CALL sp_save_global_location(?, ?, ?, ?)',
            [name, latitude, longitude, address || '']
        );
        res.status(201).json({ success: true, message: 'Location added successfully' });
    } catch (error) {
        console.error('Error adding location:', error);
        res.status(500).json({ error: 'Failed to add location' });
    }
};

exports.updateLocation = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, latitude, longitude, address } = req.body;
        await db.execute(
            'CALL sp_update_location(?, ?, ?, ?, ?)',
            [id, name, latitude, longitude, address || '']
        );
        res.json({ success: true, message: 'Location updated successfully' });
    } catch (error) {
        console.error('Error updating location:', error);
        res.status(500).json({ error: 'Failed to update location' });
    }
};

exports.deleteLocation = async (req, res) => {
    try {
        const { id } = req.params;
        await db.execute('CALL sp_delete_location(?)', [id]);
        res.json({ success: true, message: 'Location deleted successfully' });
    } catch (error) {
        console.error('Error deleting location:', error);
        res.status(500).json({ error: 'Failed to delete location' });
    }
};
