import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [userName, setUserName] = useState("");
  const [userImg, setUserImg] = useState("");
  // const navigate = useNavigate();

  if (isLoading) {
    return <div>Loading ...</div>;
  } else {
    localStorage.setItem("nickname", user.nickname);
    console.log("Profile page ==", user.nickname);
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.nickname}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default Profile;
