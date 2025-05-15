import { DialogContainer } from "../../index.ts";
import { Stack, TextField } from "@mui/material";
import { ColorDialogProp } from "../../../utils";

export default ({isOpen, onClose, color, setColor, onSave}: ColorDialogProp) => {

  const onChange = (event: any) => {
    setColor({...color, [event.target.name]: event.target.value})
  }

  return (
    <DialogContainer
      isOpen={isOpen}
      onClose={onClose}
      onSave={onSave}
    >
      <Stack sx={{ width: 450 }} spacing={2}>
        <TextField
          fullWidth name={'name'} label="Name" variant="standard" value={color.name} onChange={onChange}
        />
      </Stack>
    </DialogContainer>
  )
}