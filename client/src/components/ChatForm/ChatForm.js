import React, { useState } from "react";

function ChatForm({ selectedUser, socket }) {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message) {
      socket.emit("sendMessage", { to: selectedUser.id, message });
      setMessage(""); // Reset the input
    }
  };

  return (
    <div>
      <h1>jjjjj</h1>
      <h2>Chat with {selectedUser.nickname}</h2>
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
}

export default ChatForm;
