const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const db = require('./config/db');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:4200",
        methods: ["GET", "POST"]
    }
});

app.use(cors());
app.use(express.json());

// Track multiple sockets per user (Set of socket IDs)
const connectedUsers = new Map();

io.on('connection', (socket) => {
    socket.on('register', async (userId) => {
        try {
            const [rows] = await db.query('CALL sp_get_user_name(?)', [userId]);
            const userName = (rows[0] && rows[0].length > 0) ? rows[0][0].name : 'Unknown';
            
            // Add socket to user's set
            if (!connectedUsers.has(Number(userId))) {
                connectedUsers.set(Number(userId), new Set());
            }
            connectedUsers.get(Number(userId)).add(socket.id);
            
            // Store userId on socket for easy cleanup
            socket.userId = Number(userId);

            console.log(`🟢 User Connected: ${userName} (ID: ${userId}) | Socket: ${socket.id} | Active Tabs: ${connectedUsers.get(Number(userId)).size}`);
        } catch (error) {
            console.error('Socket registration error:', error);
        }
    });

    socket.on('disconnect', () => {
        if (socket.userId && connectedUsers.has(socket.userId)) {
            const userSockets = connectedUsers.get(socket.userId);
            userSockets.delete(socket.id);
            
            if (userSockets.size === 0) {
                connectedUsers.delete(socket.userId);
            }
            console.log(`🔴 Socket Disconnected: ${socket.id} for User ${socket.userId}`);
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
