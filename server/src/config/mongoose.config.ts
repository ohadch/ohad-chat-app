import mongoose from "mongoose";
import {MONGO_PASSWORD, MONGO_URI, MONGO_USER} from "./consts.config";

mongoose.connect(MONGO_URI, {
    auth: {
        user: MONGO_USER,
        password: MONGO_PASSWORD
    },
    authSource:"admin",
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then();

module.exports = mongoose;