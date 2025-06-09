import {DialogContainer} from "../../index.ts";
import {Autocomplete, Stack, TextField} from "@mui/material";
import {EmployeeDialogProp} from "../../../utils";

export default ({isOpen, onClose, employee, setEmployee, onSave}: EmployeeDialogProp) => {

  const onChange = (event: any) => {
    setEmployee({...employee, [event.target.name]: event.target.value})
  }

  const positions: string[] = [
    'saler', 'accountant', 'director'
  ]

  return (
    <DialogContainer
      isOpen={isOpen}
      onClose={onClose}
      onSave={onSave}
    >
      <Stack sx={{ width: 450 }} spacing={2}>
        <TextField
          fullWidth name={'name'} label="Name" variant="standard" value={employee.name} onChange={onChange}
        />
        <TextField
          fullWidth name={'age'} label="Age" variant="standard" value={employee.age} onChange={onChange}
        />
        <TextField
          fullWidth name={'address'} label="Address" variant="standard" value={employee.address} onChange={onChange}
        />
        <TextField
          fullWidth name={'salary'} label="Salary" variant="standard" value={employee.salary} onChange={onChange}
        />
        <Autocomplete
          value={'Member'}
          fullWidth options={positions}
          renderInput={(params) => <TextField {...params} variant={"standard"} label="Position" />}
          onChange={(_, newValue) => {
            setEmployee({...employee, position: newValue});
          }}
        />
      </Stack>
    </DialogContainer>
  )
}