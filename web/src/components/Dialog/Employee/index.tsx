import {DialogContainer} from "../../index.ts";
import {Stack, TextField} from "@mui/material";
import {EmployeeDialogProp} from "../../../utils";


export default ({isOpen, onClose, employee, setEmployee, onSave}: EmployeeDialogProp) => {

  const onChange = (event: any) =>{
    setEmployee({...employee, [event.target.name]: event.target.value});
  }

  return (
    <DialogContainer
      isOpen={isOpen}
      onClose={onClose}
      onSave={onSave}
    >
      <Stack sx={{width: 450}} spacing={2}>
        <TextField
          fullWidth name={'name'} label="Name" variant="outlined" value={employee.name} onChange={onChange}
        />
        <TextField
          fullWidth name={'age'} label="Age" variant="outlined" value={employee.age} onChange={onChange}
        />
        <TextField
          fullWidth name={'address'} label="Address" variant="outlined" value={employee.address} onChange={onChange}
        />
      </Stack>
    </DialogContainer>
  )
}