// server.js
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);
const path = require('path');

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Explicitly serve the index2.html file when the root path is requested
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index2.html'));
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  // Send a message to the client
  socket.emit('message', 'Hello from the server! hehe');
});

server.listen(3009, () => {
  console.log('listening on *:3009');
});
