import {app, io} from "./config"

import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import SocketHandlerService from "./services/SocketHandlerService"

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.use("/api", require("./api"))

io.on('connection', (socket) => new SocketHandlerService(socket).handle());


export * from "./config"