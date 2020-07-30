import {app, io} from "./config"

import * as bodyParser from 'body-parser'
import cors from 'cors'
import SocketHandlerService from "./services/SocketHandlerService"
import api from "./api";

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.use("/api", api)

io.on('connection', (socket) => new SocketHandlerService(socket).handle());

export default app;
export * from "./config"