import { Box, TextField, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import {useState} from "react";
import {postMethod} from "../../utils";
import {useParams} from "react-router";

const getMaxId = (ids) => {
  return Math.max(...ids) + 1
}

export default function MessageInput({messages, reload}) {
  const {name} = useParams()

  const [msg, setMsg] = useState("")

  const onSendMsg = async () => {
    await postMethod('/msgs', {
      text: msg,
      sender: name?.toLowerCase(),
      id: getMaxId(messages.map((m: any) => m.id))
    })

    setMsg('')
    reload()
  }

  return (
    <Box sx={{ p: 2, borderTop: '1px solid #ddd', display: 'flex' }}>
      <TextField
        fullWidth
        placeholder="Type a message..."
        variant="outlined"
        size="small"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
      />
      <IconButton color="primary" sx={{ ml: 1 }} onClick={onSendMsg}>
        <SendIcon />
      </IconButton>
    </Box>
  );
}
