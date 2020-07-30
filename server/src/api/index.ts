// @ts-ignore
import express from "express";

const api = express()

import userRoutes from "./routes/user";
import contactRoutes from "./routes/contact";
import conversationRoutes from "./routes/conversation";
import {mountRestrictedRouter} from "../utils";

api.use("/user", userRoutes);
mountRestrictedRouter(api, "/contact", contactRoutes);
mountRestrictedRouter(api, "/conversation", conversationRoutes);


export default api;