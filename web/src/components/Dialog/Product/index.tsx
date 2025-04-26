import {DialogContainer} from "../../index.ts";
import {Stack, TextField} from "@mui/material";
import {ProductDialogProp} from "../../../utils";


export default ({isOpen, onClose}: ProductDialogProp) => {
  return (
    <DialogContainer
      isOpen={isOpen}
      onClose={onClose}
    >
      <Stack sx={{width: 450}} spacing={2}>
        <TextField fullWidth label="Name" variant="outlined"/>
        <TextField fullWidth label="Type" variant="outlined"/>
        <TextField fullWidth label="Original" variant="outlined"/>
      </Stack>
    </DialogContainer>
  )
}