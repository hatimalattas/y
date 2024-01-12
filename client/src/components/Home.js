import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";

const Home = ({ socket }) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("username", username);
        // Sends the username and socket ID to the Node.js server
        socket.emit("newUser", { username, socketId: socket.id })
        navigate("/chat");
    };
    return (
        <form className="home__container" onSubmit={handleSubmit}>
            <h2 className="home__header">Sign in to Open Chat</h2>
            <label htmlFor="username">Username</label>
            <input
                type="text"
                minLength={6}
                name="username"
                id="username"
                className="home__input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
        </form>
    );
};

export default Home;