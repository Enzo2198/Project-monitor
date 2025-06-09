import React, { useState } from 'react';
import { Box } from '@mui/material';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

export default function ChatWindow() {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Alice', text: 'Hello!' },
    { id: 2, sender: 'Bob', text: 'Hi there!' }
  ]);

  return (
    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <MessageList messages={messages} />
      <MessageInput />
    </Box>
  );
}
