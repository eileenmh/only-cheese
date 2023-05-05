const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors:{
  }
});
io.on('connection', (socket) => {
  console.log('a user connected');

  // Listen for new user event
  socket.on('new user', (username) => {
    socket.username = username;
    console.log(username + " has joined the chat.");
  });

  // Listen for chat message event
  socket.on('chat message', (msg) => {
    console.log(socket.username + ': ' + msg);
    io.emit('chat message', { username: socket.username, message: msg });
  });
});
module.exports={server}

