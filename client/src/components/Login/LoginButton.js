import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./LoginStyle.css";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="container">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div id="title">
        <span className="chat-title">Chat 'Y'</span>
        <br />
        <span>Connecting People, Ideas, and Innovation.</span>
        <button onClick={() => loginWithRedirect()}>
          <br />
          <p className="login">Login Now!</p>
        </button>
      </div>
    </div>
  );
};

export default LoginButton;
