const express = require('express');
const cors = require('cors');
const http = require('http');
const path = require('path');
const { Server } = require('socket.io');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:4200",
        methods: ["GET", "POST"]
    }
});

const port = process.env.PORT;

app.use(cors());
app.use(express.json());

const db = require('./config/db');

// Socket.io Logic
const connectedUsers = new Map(); // Store userId -> socketId

io.on('connection', (socket) => {
    // We wait for registration to know who it is
    
    socket.on('register', async (userId) => {
        try {
            const [rows] = await db.query('CALL sp_get_user_name(?)', [userId]);
            const userName = rows[0].length > 0 ? rows[0][0].name : 'Unknown';
            
            connectedUsers.set(Number(userId), socket.id);
            console.log(`🟢 User Connected: ${userName} (ID: ${userId}) | Socket: ${socket.id}`);
        } catch (error) {
            console.error('Socket registration error:', error);
        }
    });

    socket.on('disconnect', () => {
        for (const [userId, socketId] of connectedUsers.entries()) {
            if (socketId === socket.id) {
                connectedUsers.delete(userId);
                console.log(`User ${userId} disconnected`);
                break;
            }
        }
    });
});

// Make io accessible in routes
app.set('io', io);
app.set('connectedUsers', connectedUsers);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/hierarchy', require('./routes/hierarchyRoutes'));
app.use('/api/settings', require('./routes/settingsRoutes'));
app.use('/api/messages', require('./routes/messageRoutes'));
app.use('/api/notifications', require('./routes/notificationRoutes'));
app.use('/api/locations', require('./routes/locationRoutes'));

// Serve Static Files (Angular PWA)
app.use(express.static(path.join(__dirname, 'dist/ng-message/browser')));

// SPA Fallback: Redirect all other requests to index.html
app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'dist/ng-message/browser/index.html'));
});

// Secure route example
const authMiddleware = require('./middleware/auth');
app.get('/api/protected', authMiddleware, (req, res) => {
    res.json({ message: 'This is a secure response' });
});

server.listen(port, () => console.log(`Server running on port ${port}`));
