import React, { useState } from 'react';
import styles from './styles.module.css';

const ChatFooter = ({ socket, user }: { socket: any; user: any }) => {
    const [message, setMessage] = useState('');

    const handleTyping = () => 
        socket.emit('typing', `${user.nickname} is typing...`);

    const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (message.trim() && user.nickname) {
            socket.emit('message', {
                text: message,
                name: user.nickname,
                id: `${socket.id}${Math.random()}`,
                socketId: socket.id,
            });
        }
        setMessage('');
    };
    return (
        <div className={styles.chat__footer}>
            <form className={styles.form} onSubmit={handleSendMessage}>
                <input
                    type='text'
                    placeholder='Type a message...'
                    className={styles.message}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleTyping}
                />
                <button className={styles.sendBtn}>SEND</button>
            </form>
        </div>
    );
};

export default ChatFooter;