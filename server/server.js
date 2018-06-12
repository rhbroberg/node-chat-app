const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => { // eslint-disable-line no-unused-vars
    console.log('new user connected');

    socket.on('disconnect', (socket) => { // eslint-disable-line no-unused-vars
        console.log('user disconnected');
    });
});

server.listen(port, () => {
    console.log(`started up on port ${port}`);
});
