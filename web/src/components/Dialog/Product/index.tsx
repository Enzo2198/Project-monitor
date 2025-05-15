import {DialogContainer} from "../../index.ts";
import {Stack, TextField} from "@mui/material";
import {ProductDialogProp} from "../../../utils";

export default ({isOpen, onClose, product, setProduct, onSave}: ProductDialogProp) => {

  const onChange = (event: any) => {
    setProduct({...product, [event.target.name]: event.target.value})
  }

  return (
    <DialogContainer
      isOpen={isOpen}
      onClose={onClose}
      onSave={onSave}
    >
      <Stack sx={{ width: 450 }} spacing={2}>
        <TextField
          fullWidth name={"code"} label="Code" variant="standard" value={product.code} onChange={onChange}
        />
        <TextField
          fullWidth name={"name"} label="Name" variant="standard" value={product.name} onChange={onChange}
        />
        <TextField
          fullWidth name={"shortName"} label="Short Name" variant="standard" value={product.shortName} onChange={onChange}
        />
        <TextField
          fullWidth name={"description"} label="description" variant="standard" value={product.description} onChange={onChange}
        />

      </Stack>
    </DialogContainer>
  )
}