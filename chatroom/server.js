const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);


// app.get lines of code will need to be changed if the 
// javascript and styling are located in different locations
// files are setup like this due to loading issues
app.get('/assets/chat.css', (req, res) => {
    res.type('text/css');
    res.sendFile(__dirname + '/assets/chat.css');
  });

  app.get('/assets/chat.js', (req, res) => {
    res.type('text/javascript');
    res.sendFile(__dirname + '/assets/chat.js');
  });
  

  
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
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

server.listen(3000, () => {
  console.log('listening on *3000');
});
