import { DialogContainer } from "../../index.ts";
import { Stack, TextField } from "@mui/material";
import { CustomerDialogProp} from "../../../utils";

export default ({isOpen, onClose, customer, setCustomer, onSave}: CustomerDialogProp) => {

  const onChange = (event: any) => {
    setCustomer({...customer, [event.target.name]: event.target.value})
  }

  return (
    <DialogContainer
      isOpen={isOpen}
      onClose={onClose}
      onSave={onSave}
    >
      <Stack sx={{ width: 450 }} spacing={2}>
        <TextField
          fullWidth
          name={'name'}
          label="Name"
          variant="standard"
          value={customer.name}
          onChange={onChange}
        />
        <TextField
          fullWidth
          name={'companyName'}
          label="Company Name"
          variant="standard"
          value={customer.companyName}
          onChange={onChange}
        />
        <TextField
          fullWidth
          name={'address'}
          label="Address"
          variant="standard"
          value={customer.address}
          onChange={onChange}
        />
        <TextField
          fullWidth
          name={'description'}
          label="Description"
          variant="standard"
          value={customer.description}
          onChange={onChange}
        />
      </Stack>
    </DialogContainer>
  )
}