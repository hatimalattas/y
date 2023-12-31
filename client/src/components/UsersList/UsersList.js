import React, { useState, useEffect } from "react";
import "./UsersList.css";

const UsersList = ({ socket }) => {
  const [users, setUsers] = useState([]);

  const onUserClick = (user) => {
    if (user) {
      alert("user " + user.nickname + "");
      return <h1>test</h1>;
    }
  };

  useEffect(() => {
    const handleNewUserResponse = (data) => {
      setUsers(data);
    };

    socket.on("newUserResponse", handleNewUserResponse);

    return () => {
      // Cleanup the event listener when the component unmounts
      socket.off("newUserResponse", handleNewUserResponse);
    };
  }, [socket]);

  return (
    <aside>
      <header>
        <input type="text" placeholder="Search" />
      </header>
      <ul>
        {users.map((user) => (
          // <li key={user.socketID} onClick={() => handleUserListItemClick(user)}>
          <li
            key={user.socketID}
            onClick={() => {
              console.log("User clicked: ", user);
              onUserClick(user);
            }}
          >
            <img
              src={user.picture}
              alt="User Icon"
              onError={(e) => (e.target.src = "default-icon.png")}
            />
            <div>
              <h2>{user.nickname}</h2>
              <h3>
                <span className="status green"></span>
                Online
              </h3>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default UsersList;
