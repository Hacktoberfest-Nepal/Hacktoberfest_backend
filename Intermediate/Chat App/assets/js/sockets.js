var name = prompt("ENTER YOUR NAME");
var text = document.getElementById("chat-text");
    

//const socket = io("http://localhost:3000");
const socket = io("https://n1chat.herokuapp.com/");


var form = document.getElementById("form");

//SOCKETS

form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(text.value);
    socket.emit("chatmsg", {
        message: text.value,
        username: name,
        pic: me.avatar
    });
    text.value = "";
});

socket.on("message", (data) => {
    insertChat(data.username,data.message,undefined,data.pic);
})