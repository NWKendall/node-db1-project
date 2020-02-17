const express = require('express');
const accRouter = require("./data/accountRouter");

const server = express();
server.use(express.json());
server.use("/api/accounts", accRouter);


module.exports = server;