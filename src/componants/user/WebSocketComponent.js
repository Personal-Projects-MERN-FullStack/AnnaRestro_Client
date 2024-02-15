import React, { useEffect, useState } from 'react';

function WebSocketComponent() {
  const [ws, setWs] = useState(null);
  const [message, setMessage] = useState('');
  const [receivedMessage, setReceivedMessage] = useState('');

  useEffect(() => {
    // Create a WebSocket connection when the component mounts
    const newWs = new WebSocket('ws://localhost:8080');

    newWs.onopen = () => {
      console.log('Connected to WebSocket server');
    };

    newWs.onmessage = (event) => {
      console.log('Received message:', event.data);
      setReceivedMessage(event.data);
    };

    newWs.onclose = () => {
      console.log('WebSocket connection closed');
    };

    // Store the WebSocket connection in state
    setWs(newWs);

    // Clean up the WebSocket connection when the component unmounts
    return () => {
      newWs.close();
    };
  }, []);

  const sendMessage = () => {
    if (ws) {
      ws.send(message);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
      <div>Received message: {receivedMessage}</div>
    </div>
  );
}

export default WebSocketComponent;
