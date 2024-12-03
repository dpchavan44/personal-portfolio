// server/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const path = require('path');
const http = require('http');
const socketIo = require('socket.io');
const { getGroqChatCompletion } = require('./utils/LlamaChatCompletion'); 
require('dotenv').config(); // Load environment variables from root-level .env file

const app = express();
const server = http.createServer(app); // Create HTTP server
const io = socketIo(server, {
  cors: {
    origin: "https://dp-chavan.onrender.com", // Allow requests from this origin
    methods: ["GET", "POST"]
  }
});
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());
app.use('/api', routes);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected");
    server.listen(port, () => { // Start the server
        console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => console.log(err));

// Socket.io connection
io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('sendMessage', async (message) => {
    const response = await getGroqChatCompletion(message);
    socket.emit('receiveMessage', response.choices[0]?.message?.content); // Send response back to client
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});
