const db = require('../config/db');

exports.getHierarchy = async (req, res) => {
    try {
        // 1. Fetch all hierarchy data via a single stored procedure call (multiple result sets)
        const [results] = await db.execute('CALL sp_get_hierarchy_data()');
        
        const rows = results[0];         // Result Set 1: Users
        const relationships = results[1]; // Result Set 2: Relationships

        // 2. Map children to parents
        const childrenMap = {};
        relationships.forEach(rel => {
            if (!childrenMap[rel.user_id]) childrenMap[rel.user_id] = [];
            childrenMap[rel.user_id].push(rel.child_user_id);
        });

        // 3. Build recursive tree function
        const buildTree = (userId) => {
            const user = rows.find(r => r.id === userId);
            if (!user) return null;

            const node = {
                ...user,
                isOpen: user.level === 1 || user.level === 2, 
                children: []
            };

            const childIds = childrenMap[userId] || [];
            childIds.forEach(childId => {
                const childNode = buildTree(childId);
                if (childNode) node.children.push(childNode);
            });

            return node;
        };

        // 4. Build the tree starting ONLY from the logged-in user
        const userTree = buildTree(req.user.id);
        
        if (!userTree) {
            return res.status(404).json({ message: 'User not found in hierarchy' });
        }

        res.json(userTree);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
