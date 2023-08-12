import logo from "./logo.svg";
import Login from "./components/Login/Login";
import Chat from "./components/ChatForm/ChatForm";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { io } from "socket.io-client";
const SERVER = "http://localhost:5000";

function App() {
  var socket = io(SERVER);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login socket={socket} />} />
        <Route path="/chat" element={<Chat socket={socket} />} />

        {/* TODO: Add a custom styled page for path not found error */}
        <Route path="*" element={<h1>404 Page not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
