const { Console } = require("console");
const express = require("express");
const app = express();
const server = require("http").createServer(app);
var net = require("net");
var clientC = new net.Socket();

const io = require("socket.io")(server, {
    cors: { origin: "*" },
});

const SocketIOController = require("./controllers/SocketIOController");
const CSharpController = require('./controllers/CSharpController');

clientC.on("close", function () {
    console.log("Connection whitch C# close");
});

server.listen(3000, () => {
    console.log("Socket server is running.");
    
    SocketIOController.init(io, clientC);
    CSharpController.init(io, clientC);
});

clientC.connect(3300, "127.0.0.1", function () {});
