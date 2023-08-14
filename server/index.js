const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);

const io = require("socket.io")(server, {
  cors: { origin: "*" },
});
const PORT = process.env.PORT || 5000;

// io.on("connection", (socket) => {
//   console.log("new client connected ", socket.id);
//   socket.emit("connection", null);
// });

io.on("connection", (socket) => {
  io.to(socket.id).emit("socket_id", socket.id);

  socket.on("send_message", (messageData) => {
    socket.broadcast.emit("receive_message", messageData);
  });
});
server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
