const http = require("http");
const socketio = require("socket.io");
const cors = require("cors");

const server = http.createServer((req, res) => {
    res.end("I am connected !!");
    console.log("Server running");
});


const io = socketio(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket, req) => {
    socket.emit('welcome',"Welcome to socketio server !!!")
    socket.on('message', (msg) => {
        console.log(msg);
    })
})

server.listen(3000);