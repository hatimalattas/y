import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StyleLogin.css";

const Login = ({ socket }) => {
  const [username, setUserName] = useState("");
  const navigate = useNavigate();

  const navigateHome = () => {
    if (username.trim() === "") {
      alert("Please enter a username.");
    } else {
      localStorage.setItem("username", username);
      socket.emit("newUser", { username, socketID: socket.id });
      navigate("/chat");
    }
  };

  return (
    <div classNameName="container">
      <form>
        <div className="sub-container">
          <h1>Chat 'Y'</h1>
          <input
            type="text"
            name="name"
            placeholder="Username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />

          <button type="submit" className="enter-chat" onClick={navigateHome}>
            ENTER
          </button>
        </div>
      </form>
    </div>
  );
};
export default Login;
