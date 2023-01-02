console.log("client script runs");
const socket = io('http://localhost:3000');
console.log(socket);
socket.on("messageFromServer",(dataFromServer)=>{
    console.log(dataFromServer);
    socket.emit("messageToServer",{data: "This message is from client!!! "});
})


document.querySelector("#message-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const newMsg = document.querySelector('#user-message').value;
    socket.emit("newMessageToServer", { text: newMsg });
});

socket.on('messageToClients',(msg)=>{
    console.log(msg)
    document.querySelector('#messages').innerHTML += `<li>${msg.text}</li>`
})
