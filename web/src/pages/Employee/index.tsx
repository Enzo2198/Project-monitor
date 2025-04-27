import { useState } from 'react';
import {EmployeeDialog, FTable} from '../../components'
import {Header, Employee} from '../../utils'
import {Button} from "@mui/material";

export default () => {
  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false);
  const [curEmployee, setCurEmployee] = useState<Employee>({
    id: null,
    name: '',
    age: '',
    address: '',
  })

  const headers: Header[] = [
    {name: 'id', text: 'ID'},
    {name: 'name', text: 'Ten'},
    {name: 'age', text: 'Tuoi'},
    {name: 'address', text: 'Dia Chi'},
    {name: 'action', text: ''},
  ]

  const [employees, setEmployee] = useState<Employee[]>([
    {id: 1, name: 'Dung', age: 20, address: 'Thanh Oai - Ha Noi'},
    {id: 2, name: 'Trung', age: 22, address: 'Quoc Oai - Ha Noi'},
    {id: 3, name: 'Son', age: 30, address: 'Thanh Oai 2 - Ha Noi'},
  ])

  const onAdd = () => {
    setIsOpenDialog(true);
  }

  const onEdit = (id: number) => {
    setIsOpenDialog(true);
  }

  const onSave = () => {
    setEmployee([...employees, curEmployee])
    setIsOpenDialog(false);
  }

  return (
    <>
      <h1>Employee</h1>
      <Button variant="outlined" onClick={onAdd}>Add</Button>
      <FTable
        tableName={'employee hihi'}
        headers={headers}
        rows={employees}
        onEdit={onEdit}
      />
      <EmployeeDialog
        employee={curEmployee}
        setEmployee={setCurEmployee}
        onSave={onSave}
        isOpen={isOpenDialog}
        onClose={() => setIsOpenDialog(false)}
      />
    </>
  )
}