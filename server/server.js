const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);
const { generateMessage } = require('./utils/message');

app.use(express.static(publicPath));

io.on('connection', (socket) => { // eslint-disable-line no-unused-vars// eslint-disable-line no-unused-vars
    console.log('new user connected');

    socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app!'));
    socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));

    socket.on('createMessage', (message) => {
        console.log('message received: ', message);
        io.emit('newMessage', generateMessage(message.from, message.text));
    });

    socket.on('disconnect', (socket) => { // eslint-disable-line no-unused-vars
        console.log('user disconnected');
    });
});

server.listen(port, () => {
    console.log(`started up on port ${port}`);
});
