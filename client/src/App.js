import React, { useState, useEffect, useRef } from "react";
// import "./styles.css";
import { io } from "socket.io-client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Chat from "./components/ChatForm/ChatForm";

function App() {
  const [socketID, setSocketID] = useState("");
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const socket = io("http://localhost:5000");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login socket={socket} />} />
        {/* <Route path="/chat" element={<Chat socket={socket} />} /> */}

        {/* TODO: Add a custom styled page for path not found error */}
        <Route path="*" element={<h1>404 Page not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
