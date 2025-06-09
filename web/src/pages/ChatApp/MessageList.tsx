import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

export default function MessageList({ messages }: any) {
  return (
    <Box sx={{ flex: 1, overflowY: 'auto', p: 2 }}>
      <List>
        {messages.map((msg: any) => (
          <ListItem key={msg.id} alignItems="flex-start">
            <ListItemText
              primary={<Typography fontWeight="bold">{msg.sender}</Typography>}
              secondary={msg.text}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
