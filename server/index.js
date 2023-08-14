const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);

const io = require("socket.io")(server, {
  cors: { origin: "*" },
});
const PORT = process.env.PORT || 5000;
let users = [];

// io.on("connection", (socket) => {
//   console.log("new client connected ", socket.id);
//   socket.emit("connection", null);
// });

io.on("connection", (socket) => {
  io.to(socket.id).emit("socket_id", socket.id);

  socket.on("newUser", (data) => {
    users.push(data);
    console.log("users ARE==== ", users);
    socket.emit("newUserResponse", users);
  });

  socket.on("send_message", (messageData) => {
    socket.broadcast.emit("receive_message", messageData);
  });

  socket.on("disconnect", () => {
    users = users.filter((user) => user.socketID !== socket.id);
    socket.emit("newUserResponse", users);
    socket.disconnect();
  });
});
server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
