const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
  cors: { origin: "*" },
});
const PORT = process.env.PORT || 5000;

// Maintain a collection of connected users
const users = [];

// Handle socket connections
io.on("connection", (socket) => {
  // Emit the connected socket's ID back to the client
  socket.emit("socket_id", socket.id);
  console.log("Connection established with socket ID:", socket.id);

  // Handle new user registration
  socket.on("newUser", (data) => {
    users.push(data);
    socket.emit("newUserResponse", users);
  });

  // Broadcast received messages to all other clients
  socket.on("send_message", (messageData) => {
    socket.broadcast.emit("receive_message", messageData);
  });

  socket.on("send-private-message", ({ toSocketId, message }) => {
    socket
      .to(toSocketId)
      .emit("receive-private-message", { from: users[socket.id], message });
  });

  // Handle user logout and remove from the users list
  socket.on("user_logout", () => {
    var index = users.indexOf(socket.id);
    console.log("user index to be removed ", index);
    if (index !== -1) {
      users.splice(index, 1);
      io.emit("newUserResponse", users);
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
