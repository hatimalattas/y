import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = ({ socket }) => {
  const { logout } = useAuth0();
  const { user } = useAuth0();

  const handleLogout = () => {
    socket.emit("user_logout", logout);
    localStorage.removeItem("nickname", user.nickname);
    logout({ logoutParams: { returnTo: window.location.origin } });
  };

  return (
    <button className="logout" onClick={handleLogout}>
      Log Out
    </button>
  );
};

export default LogoutButton;
