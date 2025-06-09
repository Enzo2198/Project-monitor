import {useEffect, useMemo, useState} from 'react';
import { Box } from '@mui/material';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import {getMethod} from "../../utils";

export default function ChatWindow() {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Alice', text: 'Hello!' },
    { id: 2, sender: 'Bob', text: 'Hi there!' }
  ]);

  const getData = async () => {
    setMessages(await getMethod('/msgs'))
  }

  useEffect(() => {
    const poolMsg = setInterval(() => {
      getData()
    }, 3000)
  }, []);

  return (
    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <MessageList messages={messages} />
      <MessageInput messages={messages} reload={getData}/>
    </Box>
  );
}
