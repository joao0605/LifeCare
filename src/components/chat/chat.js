import styles from '../chat/chat.module.css'


import React, { useState } from 'react';

export default function Chat(){

  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      setMessages([...messages, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div>
      <h1 className={styles.chatSubTitle}></h1>
      <div className="message-container">
        {messages.map((message, index) => (
            <div className={styles.messageBox}>
          <div key={index} className="message">
            {message}
          </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type your message..."
          className={styles.messageWrite}
        />
        <button type="submit" className={styles.messageSend}>Send</button>
      </form>
    </div>
  );
};
