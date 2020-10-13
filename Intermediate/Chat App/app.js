const express = require("express");
const path = require("path");
const sockets = require("socket.io");
var PORT = process.env.PORT || 3000;
app = express()
app.set("view engine","ejs")
app.use(
    express.static(path.join(__dirname,"assets"))
);

app.get("/",(req,res)=>{
    res.render("index.ejs");
})

const server = app.listen(PORT,()=>console.log("Listening on port "+3000))

const io = sockets(server);

io.on("connection",(socket)=>{
    socket.emit("message", {
        username:"Nodejs Server",
        message: "Welcome to nodejs Chat app. Your id is "+socket.id,
        pic: "https://previews.123rf.com/images/goodzone95/goodzone951803/goodzone95180300023/96668201-chatbot-icon-cute-robot-working-behind-laptop-modern-bot-sign-design-smiling-customer-service-robot-.jpg"
    })
    socket.on("chatmsg", (data) => {
        socket.broadcast.emit("message", {
            message: data.message,
            username:data.username,
            pic: data.pic
        });
    })
})
