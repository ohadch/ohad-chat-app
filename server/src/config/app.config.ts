import express from "express";

export const app = express();
export const http = require('http').createServer(app);
export const io = require('socket.io')(http);

