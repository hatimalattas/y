import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";

const ChatBar = ({ socket, user }: { socket: any; user: any }) => {
  const [users, setUsers] = useState<Array<object>>([]);

  useEffect(() => {
    socket.on("newUserResponse", (data: any) => setUsers(data));
  }, [socket, users]);
  return (
    <div className={styles.chat__sidebar}>
      <header>
        <input
          type="text"
          placeholder="search"
          className={styles.chat__search}
        />
      </header>
      <div>
        <div className={styles.chat__users}>
          {users.map((user: any) => (
            <ul key={user.socketId}>
              <li className={styles.chat__userslist}>
                <img
                  src={user.picture}
                  alt=""
                  className={styles.chat__avatar}
                />
                <div className={styles.chat__userInfo}>
                  <h2 className={styles.chat__username}>{user.username}</h2>
                  <h3 className={styles.chat__userstatus}>
                    <span className={styles.chat__status}></span>
                    Online
                  </h3>
                </div>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatBar;
