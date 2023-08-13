import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StyleLogin.css";

const Login = () => {
  const [username, setUserName] = useState();
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/chat");
  };

  return (
    <div classNameName="container">
      <form>
        <div className="sub-container">
          <h1>Chat 'Y'</h1>
          <input type="text" name="name" placeholder="Username" />

          <button type="submit" value="Submit" className="enter-chat">
            ENTER
          </button>
        </div>
      </form>
    </div>
  );
};
export default Login;
