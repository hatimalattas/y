import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./LoginStyle.css";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const [userName, setUserName] = useState("");

  const handleSubmit = (e) => {
    console.log("handleSubmit handleSubmit");
    // localStorage.setItem("userName", {user.name});
    // socket.emit("newUser", { userName, socketID: socket.id });
  };
  return (
    <div className="container">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div id="title">
        <span className="chat-title">Chat 'Y'</span>
        <br />
        <span>Connecting People, Ideas, and Innovation.</span>
        <form onSubmit={handleSubmit}>
          <button onClick={() => loginWithRedirect()}>
            <br />
            <p className="login">Login or Signup </p>
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginButton;
