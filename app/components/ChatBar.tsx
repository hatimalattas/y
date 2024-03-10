import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";

const ChatBar = ({ socket }: { socket: any }) => {
    const [users, setUsers] = useState<Array<object>>([]);

    useEffect(() => {
        const handleNewUserResponse = (data: any) => {
            setUsers([...data]);
        };

        socket.on("newUserResponse", handleNewUserResponse);

        return () => {
            socket.off("newUserResponse", handleNewUserResponse);
        };

    }, [socket]);

    return (
        <div className={styles.chat__sidebar}>
            <h2>Y</h2>
            <div>
                <h4 className={styles.chat__header}>Active Users</h4>
                <div className={styles.chat__users}>
                    {users.map((user: any) => (
                        <p key={user.socketId}>{user.username}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ChatBar;