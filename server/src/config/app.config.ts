import express from "express";
import * as httpModule from "http";
import socket from "socket.io";

export const app = express();
export const http = httpModule.createServer(app);
export const io = socket(http);

