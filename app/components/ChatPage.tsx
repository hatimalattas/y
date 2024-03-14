"use client";

import React, { useEffect, useState, useRef } from "react";
import ChatBar from "./ChatBar";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";
import styles from "./styles.module.css";
import Sidebar from "./Sdebar";

const ChatPage = ({ socket, user }: { socket: any; user: any }) => {
  const [messages, setMessages] = useState<any[]>([]); // Update the type of messages
  const [typingStatus, setTypingStatus] = useState<string>(""); // Update the type of typingStatus
  const lastMessageRef = useRef<HTMLDivElement>(null); // Update the type of lastMessageRef

  useEffect(() => {
    socket.on("messageResponse", (data: any[]) =>
      setMessages([...messages, data])
    );
  }, [socket, messages]);

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" }); // Fix the scrollIntoView error
  }, [messages]);

  useEffect(() => {
    socket.on("typingResponse", (data: string) => setTypingStatus(data)); // Update the type of data
  }, [socket]);

  useEffect(() => {
    socket.on("stopTypingResponse", (data: string) => setTypingStatus(" ")); // Update the type of data
  }, [socket]);

  return (
    <div className={styles.chat}>
      <Sidebar />
      <ChatBar socket={socket} user={user} />
      <div className={styles.chat__main}>
        <ChatBody
          user={user}
          messages={messages}
          lastMessageRef={lastMessageRef}
          typingStatus={typingStatus}
        />
        <ChatFooter socket={socket} user={user} />
      </div>
    </div>
  );
};

export default ChatPage;
