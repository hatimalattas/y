import React, { useState, useEffect, useRef } from "react";
import LoginButton from "./components/Login/LoginButton";
import LogoutButton from "./components/Logout/LogoutButton";
import Profile from "./components/Profile/Profile";
import HomePage from "./components/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";
import { io } from "socket.io-client";

function App() {
  const [socketID, setSocketID] = useState("");
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const socket = io("http://localhost:5000");
  const { isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return (
      <div className="App">
        <LogoutButton socket={socket} />
        {/* <Profile /> */}
        <HomePage socket={socket} />
      </div>
    );
  } else {
    return (
      <div className="App">
        <header className="App-header">
          <LoginButton />
        </header>
      </div>
    );
  }
}

export default App;
