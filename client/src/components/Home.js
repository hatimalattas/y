import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("userName", userName);
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