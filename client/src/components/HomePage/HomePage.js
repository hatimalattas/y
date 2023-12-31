import React, { useEffect, useState } from "react";
import "./HomePage.css";
import UsersList from "../UsersList/UsersList";
import ChatForm from "../ChatForm/ChatForm";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

const HomePage = ({ socket }) => {
  const [userName, setUserName] = useState("");
  const [userImg, setUserImg] = useState("");
  const { user } = useAuth0();
  const { nickname, picture, email } = user;
  var socketID = socket.id;
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserSelection = (user) => {
    console.log("Setting selected user to: ", user); // For debugging purposes
    setSelectedUser(user);
  };

  socket.emit("newUser", { nickname, picture, socketID });

  return (
    <div>
      <UsersList socket={socket} onUserClick={handleUserSelection} />
      {selectedUser ? (
        <ChatForm selectedUser={selectedUser} socket={socket} />
      ) : (
        "Click on a user to start chatting!"
      )}
    </div>
  );
};

export default HomePage;
