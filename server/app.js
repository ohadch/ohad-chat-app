const {app, http, io} = require("./config");

const bodyParser = require('body-parser');
const cors = require('cors')
const SocketHandlerService = require("./services/SocketHandlerService");

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.use("/api", require("./api"))

io.on('connection', (socket) => new SocketHandlerService(socket).handle());


module.exports.app = app;
module.exports.http = http;