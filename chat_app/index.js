const express = require('express');
const socketio = require('socket.io');
const path = require('path');


const app = express();

app.use(express.static(path.join(__dirname, 'public')));
const expressServer = app.listen(3000);

const io = socketio(expressServer);
io.on("connection", (socket) => {
    socket.emit("messageFromServer", { data: "This is message from socket server!!!" });
    socket.on("messageToServer", (dataFromClient) => {
        console.log(dataFromClient);
    })

    socket.on("newMessageToServer", (msg) => {
        console.log(msg);
        io.emit('messageToClients',{text:msg.text})
    })
})

