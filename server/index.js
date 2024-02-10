const express = require("express");
const app = express();
const PORT = 4000;
const http = require("http").Server(app);
const cors = require("cors");

app.use(cors());

const socketIO = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
  },
});

let users = [];

socketIO.on("connection", (socket) => {
  socket.on("message", (data) => {
    console.log(data);
    socketIO.emit("messageResponse", data);
  });

  socket.on("stopTyping", () => {
    console.log("Emitting stopTyping to other users");
    socket.broadcast.emit("stopTypingResponse");
  });

  socket.on("typing", (data) => {
    socket.broadcast.emit("typingResponse", data);
  });

  socket.on("newUser", (data) => {
    // Check if the user already exists in the array
    const userExists = users.some(
      (user) =>
        user.username === data.username || user.socketId === data.socketId
    );
    // If the user does not exist, add them to the array
    if (!userExists) {
      users.push(data);
      console.log(`👤: ${data.username} just joined the chat!`);
    }
    // Sends the users array to the client
    socketIO.emit("newUserResponse", users);
  });

  socket.on("disconnect", () => {
    // Check if the user is in the users array
    const userExists = users.some((user) => user.socketId === socket.id);
    // If the user exists, remove them from the array
    if (userExists) {
      // Filters out the user who left the chat from the users array
      users = users.filter((user) => {
        user.socketId !== socket.id;
        console.log(`👤: ${user.username} just left the chat!`);
      });
      // Send the updated users array to the client
      socketIO.emit("newUserResponse", users);
    }
    socket.disconnect();
  });
});

http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
