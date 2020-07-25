const config = require("./config");

const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    io.emit('chat message', "++++++ A new user joined the chat");

    socket.on('chat message', (msg) => {
        socket.broadcast.emit('chat message', msg);
    });

    socket.on('typing', (msg) => {
        socket.broadcast.emit('typing', msg);
    });

    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
    });

    socket.on('disconnect', (msg) => {
        io.emit('chat message', "----- Somebody just left the chat");
    });
});


http.listen(config.PORT, () => {
    console.log(`listening on http://localhost:${config.PORT}`);
});