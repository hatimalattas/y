import React from 'react';
import { useRouter } from "next/navigation";
import styles from './styles.module.css';
import socketIO from 'socket.io-client';

const socket = socketIO('http://localhost:4000');

const ChatBody = ({ messages, lastMessageRef, typingStatus, user }: { messages: any[], lastMessageRef: React.RefObject<any>, typingStatus: string, user: any }) => {
  const router = useRouter();
  
  const handleLogout = () => {
    socket.emit('logout', { username: user.nickname, socketId: socket.id });
    window.location.href = '/api/auth/logout';
  };

  return (
    <>
      <header className={styles.chat__mainHeader}>
        <p>Chat</p>
        <button className={styles.leaveChat__btn} onClick={handleLogout}>
          Logout
        </button>
      </header>

      <div className={styles.message__container}>
        {messages.map((message) =>
          message.name === user.nickname ? (
            <div className={styles.message__chats} key={message.id}>
              <p className={styles.sender__name}>You</p>
              <div className={styles.message__sender}>
                <p>{message.text}</p>
              </div>
            </div>
          ) : (
            <div className={styles.message__chats} key={message.id}>
              <p>{message.name}</p>
              <div className={styles.message__recipient}>
                <p>{message.text}</p>
              </div>
            </div>
          )
        )}

        <div className={styles.message__status}>
          <p>{typingStatus}</p>
        </div>
        <div ref={lastMessageRef} />
      </div>
    </>
  );
};

export default ChatBody;