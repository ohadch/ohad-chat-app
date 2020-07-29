require("./config");

const express = require("express");
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser');
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.use("/api", require("./api"))

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


module.exports.app = app;
module.exports.http = http;