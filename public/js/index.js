var socket = io(); // eslint-disable-line no-undef

socket.on('connect', function() {
    console.log('connected to server');

});

socket.on('disconnect', function() {
    console.log('disconnected from server');
});

socket.on('newMessage', function(message) {
    console.log('message received: ', message);
});
