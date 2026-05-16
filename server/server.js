const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const db = require('./config/db');
const path = require('path');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:4200",
        methods: ["GET", "POST"]
    }
});

const { ExpressPeerServer } = require('peer');
const peerServer = ExpressPeerServer(server, {
    debug: true,
    path: '/'
});
app.use('/peerjs', peerServer);

app.use(cors());
app.use(express.json());
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Track multiple sockets per user (Set of socket IDs)
const connectedUsers = new Map();

// Helper to get all ancestors of a user
const getAncestors = async (userId) => {
    const ancestors = [];
    let currentId = userId;
    while (true) {
        const [rows] = await db.query('SELECT user_id FROM children WHERE child_user_id = ?', [currentId]);
        if (rows && rows.length > 0) {
            const parentId = rows[0].user_id;
            ancestors.push(parentId);
            currentId = parentId;
        } else {
            break;
        }
    }
    return ancestors;
};

// Helper to get all descendant IDs for a user
const getDescendants = async (userId) => {
    const descendants = [];
    const queue = [userId];
    while (queue.length > 0) {
        const id = queue.shift();
        const [rows] = await db.query('SELECT child_user_id FROM children WHERE user_id = ?', [id]);
        if (rows) {
            rows.forEach(row => {
                descendants.push(row.child_user_id);
                queue.push(row.child_user_id);
            });
        }
    }
    return descendants;
};

io.on('connection', (socket) => {
    socket.on('register', async (userId) => {
        try {
            userId = Number(userId);
            const [rows] = await db.query('CALL sp_get_user_name(?)', [userId]);
            const userName = (rows[0] && rows[0].length > 0) ? rows[0][0].name : 'Unknown';
            
            // Join a private room for hierarchical updates
            socket.join(`presence_updates_for_${userId}`);

            const isFirstSession = !connectedUsers.has(userId);
            if (isFirstSession) {
                connectedUsers.set(userId, new Set());
            }
            connectedUsers.get(userId).add(socket.id);
            socket.userId = userId;

            // 1. If it's the first connection, notify ancestors
            if (isFirstSession) {
                const ancestors = await getAncestors(userId);
                ancestors.forEach(ancestorId => {
                    io.to(`presence_updates_for_${ancestorId}`).emit('presence_update', {
                        userId: userId,
                        status: 'online'
                    });
                });
            }

            // 2. Send initial presence state (which descendants are online)
            const descendants = await getDescendants(userId);
            const onlineDescendants = descendants.filter(id => connectedUsers.has(id));
            // Also include self as online
            onlineDescendants.push(userId);
            
            socket.emit('initial_presence', onlineDescendants);

            console.log(`🟢 User Connected: ${userName} (ID: ${userId}) | Socket: ${socket.id} | Active Sessions: ${connectedUsers.get(userId).size}`);
        } catch (error) {
            console.error('Socket registration error:', error);
        }
    });

    socket.on('disconnect', async () => {
        if (socket.userId && connectedUsers.has(socket.userId)) {
            const userSockets = connectedUsers.get(socket.userId);
            userSockets.delete(socket.id);
            
            if (userSockets.size === 0) {
                connectedUsers.delete(socket.userId);
                console.log(`🔴 User Offline: ID ${socket.userId}`);
                
                // Notify ancestors
                const ancestors = await getAncestors(socket.userId);
                ancestors.forEach(ancestorId => {
                    io.to(`presence_updates_for_${ancestorId}`).emit('presence_update', {
                        userId: socket.userId,
                        status: 'offline'
                    });
                });
            }
        }
    });

    socket.on('initiate_call', ({ to, from, callerName }) => {
        console.log(`📞 Call initiated: From ${from} to ${to} (${callerName})`);
        const targetSockets = connectedUsers.get(Number(to));
        if (targetSockets) {
            console.log(`📡 Relaying call to ${targetSockets.size} sockets of user ${to}`);
            targetSockets.forEach(socketId => {
                io.to(socketId).emit('incoming_call', { from, callerName });
            });
        } else {
            console.log(`⚠️ Target user ${to} is not connected.`);
        }
    });

    socket.on('accept_call', ({ to, from }) => {
        console.log(`✅ Call accepted: By ${from} for ${to}`);
        const targetSockets = connectedUsers.get(Number(to));
        if (targetSockets) {
            targetSockets.forEach(socketId => {
                io.to(socketId).emit('call_accepted', { from });
            });
        }
    });

    socket.on('reject_call', ({ to, from }) => {
        console.log(`❌ Call rejected: By ${from} for ${to}`);
        const targetSockets = connectedUsers.get(Number(to));
        if (targetSockets) {
            targetSockets.forEach(socketId => {
                io.to(socketId).emit('call_rejected', { from });
            });
        }
    });

    socket.on('end_call', ({ to }) => {
        console.log(`📵 Call ended: Notification for ${to}`);
        const targetSockets = connectedUsers.get(Number(to));
        if (targetSockets) {
            targetSockets.forEach(socketId => {
                io.to(socketId).emit('call_ended');
            });
        }
    });
});

// Helper to disconnect all sockets for a user
const disconnectUserGlobally = (userId) => {
    const userSockets = connectedUsers.get(Number(userId));
    if (userSockets) {
        userSockets.forEach(socketId => {
            const s = io.sockets.sockets.get(socketId);
            if (s) {
                s.emit('force_logout'); // Notify tab
                s.disconnect(true);
            }
        });
        connectedUsers.delete(Number(userId));
        console.log(`🚫 Globally Disconnected all sessions for User ${userId}`);
    }
};

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/hierarchy', require('./routes/hierarchyRoutes'));
app.use('/api/messages', require('./routes/messageRoutes'));
app.use('/api/notifications', require('./routes/notificationRoutes'));
app.use('/api/settings', require('./routes/settingsRoutes'));
app.use('/api/locations', require('./routes/locationRoutes'));

// Browser Config Endpoint
app.get('/api/browser-config', (req, res) => {
    try {
        const config = require('./config/browser-config.json');
        res.json(config);
    } catch (error) {
        console.error('Error loading browser config:', error);
        res.status(500).json({ error: 'Failed to load browser configuration' });
    }
});

// Global Logout Endpoint
app.post('/api/auth/logout-global', (req, res) => {
    const { userId } = req.body;
    if (userId) {
        disconnectUserGlobally(userId);
    }
    res.json({ success: true, message: 'Global logout triggered' });
});

// Attach io to app for use in controllers
app.set('io', io);
app.set('connectedUsers', connectedUsers);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
