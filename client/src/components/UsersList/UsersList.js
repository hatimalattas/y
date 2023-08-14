import React from "react";
import { useState, useEffect } from "react";

import "./StyleUsersList.css";

const UsersList = ({ socket }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on("newUserResponse", (data) => setUsers(data));
  }, [socket, users]);

  return (
    <aside>
      <header>
        <input type="text" placeholder="search" />
      </header>
      <ul>
        {users.map((user) => (
          <li key={user.socketID}>
            <img src="https://i.ibb.co/gMjC8n9/user.png" alt="default-icon" />{" "}
            <div>
              <h2>{user.username} </h2>
              <h3>
                <span class="status green"></span>
                online
              </h3>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default UsersList;
