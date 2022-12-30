const http = require("http");
const socketio = require("socket.io");

const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.end("I am connected !!");
    console.log("Server running");
});


const io = socketio(server);

io.on('connection', (socket, req) => {
    socket.emit('welcome',"Welcome to socketio server !!!")
    socket.on('message', (msg) => {
        console.log(msg);
    })
})

server.listen(3000);