import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

const ChatFooter = ({ socket, user }: { socket: any; user: any }) => {
    const [message, setMessage] = useState('');
    // Add a state to keep track of the typing timeout ID
    const [typingTimeoutId, setTypingTimeoutId] = useState<NodeJS.Timeout | null>(null);

    const handleTyping = () => {
        socket.emit('typing', `${user.nickname} is typing...`);
        // Clear the previous timeout if it exists
        if (typingTimeoutId) {
            clearTimeout(typingTimeoutId);
        }
        // Set a new timeout and save its ID
        const timeoutId = setTimeout(() => {
            socket.emit('stopTyping');
        }, 2000);
        setTypingTimeoutId(timeoutId);
    }

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
        // Clear typing timeout and emit stopTyping when message is sent
        if (typingTimeoutId) {
            clearTimeout(typingTimeoutId);
            socket.emit('stopTyping');
        }
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

