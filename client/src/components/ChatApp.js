import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { getFormatedResult } from '../utils/HelperFunction';

const ChatApp = () => {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);
  const [socket, setSocket] = useState(null);
  useEffect(() => {
    const newSocket = io(process.env.REACT_APP_WEB_SCOKET_URL); // Ensure this matches your server port
    setSocket(newSocket);

    newSocket.on('receiveMessage', (message) => {
      setChat((prevChat) => [...prevChat, { text: message, sent: false }]);
    });

    return () => {
      newSocket.off('receiveMessage');
      newSocket.close();
    };
  }, []);
  const sendMessage = () => {
    if (socket) {
      socket.emit('sendMessage', message);
      setChat((prevChat) => [...prevChat, { text: message, sent: true }]);
      setMessage('');
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start bg-white dark:bg-gray-900">
      <div className="w-full sm:w-6/12 flex flex-col bg-white dark:bg-gray-900 rounded">
        <div className="flex-grow pt-4 pb-20 px-2 overflow-auto">
          {chat.map((msg, index) => {
            let result;
            result = msg.sent ? msg.text : getFormatedResult(msg.text);
            return (
              <div
                key={index}
                className={`mb-2 p-2 flex items-center text-black dark:text-white ${
                  msg.sent ? 'bg-blue-200 dark:bg-blue-700 rounded-l-md rounded-tr-none rounded-br-xl ml-8' : 'bg-gray-200 dark:bg-gray-700 rounded-b-xl rounded-tl-none rounded-tr-md mr-8'
                }`}>
                {result}
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full sm:w-6/12 bg-white dark:bg-gray-900 rounded fixed bottom-0 left-0 right-0 mx-auto">
        <div className="flex pb-4 pt-4 px-1 md:px-0">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder='Type a message...'
            className="flex-grow p-2 border bg-white dark:bg-gray-500  text-black dark:text-white rounded-lg"
          />
          <button
            onClick={sendMessage}
            className="ml-2 px-4 bg-blue-500 text-white rounded-lg"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;