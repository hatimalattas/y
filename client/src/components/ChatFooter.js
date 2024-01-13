import React, { useState } from 'react';

const ChatFooter = ({ socket }) => {
    const [message, setMessage] = useState('');

    const handleTyping = () => 
        socket.emit('typing', `${localStorage.getItem('username')} is typing...`);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (message.trim() && localStorage.getItem('username')) {
            socket.emit('message', {
                text: message,
                name: localStorage.getItem('username'),
                id: `${socket.id}${Math.random()}`,
                socketId: socket.id,
            });
        }
        setMessage('');
    };
    return (
        <div className='chat__footer'>
            <form className='form' onSubmit={handleSendMessage}>
                <input
                    type='text'
                    placeholder='Type a message...'
                    className='message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleTyping}
                />
                <button className='sendBtn'>SEND</button>
            </form>
        </div>
    );
};

export default ChatFooter;