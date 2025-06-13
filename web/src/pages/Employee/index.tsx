import {useState} from 'react';
import {EmployeeDialog, FHeader, FTable, SearchBar,} from '../../components'
import {Header, Employee} from '../../utils'
import {Box} from "@mui/material"
import { RootState } from '../../store';
import { useSelector } from 'react-redux';

const headers: Header[] = [
  {name: 'id', text: 'ID'},
  {name: 'name', text: 'Ten'},
  {name: 'age', text: 'Tuoi'},
  {name: 'address', text: 'Dia Chi'},
  {name: 'salary', text: 'Luong'},
  {name: 'position', text: 'Vi tri'},
  {name: 'status', text: 'Status'},
  {name: 'action', text: ''}
]

const defaultEmployee = {
  id: 0,
  name: '',
  age: '',
  salary: '',
  address: '',
  position: '',
  status: ''
}

export default () => {
  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false)
  const [curEmployee, setCurEmployee] = useState<Employee>({...defaultEmployee})

  const {data: employees} = useSelector((state: RootState) => state.employees)
  const onAdd = () => {
    setCurEmployee({...defaultEmployee})
    setIsOpenDialog(true)
  }

  const onUpdate = (id: number) => {
    // @ts-ignore
    setCurEmployee({...employees.find(e => e.id === id)})
    setIsOpenDialog(true)
  }

  const onSave = async () => {
    setIsOpenDialog(false)

    // @ts-ignore
    if (curEmployee.id) store.dispatch(updateEmployee({...toBody(), id: curEmployee.id}))
    // @ts-ignore
    else store.dispatch(createEmployee(toBody()))
  }

  const toBody = () => {
    return {
      ...curEmployee,
      age: Number(curEmployee.age),
      salary: Number(curEmployee.salary)
    }
  }

  return (
    <>
      <FHeader title={'Employees'}/>
      <Box className={'container'}>
        <SearchBar onAdd={onAdd}/>

        <FTable
          headers={headers}
          rows={employees}
          onUpdate={onUpdate}
        />
        <EmployeeDialog
          employee={curEmployee}
          setEmployee={setCurEmployee}
          onSave={onSave}
          isOpen={isOpenDialog}
          onClose={() => setIsOpenDialog(false)}
        />
      </Box>
    </>
  )
}