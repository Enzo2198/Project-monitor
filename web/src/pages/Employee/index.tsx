import {useEffect, useState} from 'react';
import {EmployeeDialog, FHeader, FTable, SearchBar,} from '../../components'
import {Header, Employee, postMethod, getMethod, putMethod} from '../../utils'
import {Box} from "@mui/material"

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

export default () => {
  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false)
  const [curEmployee, setCurEmployee] = useState<Employee>({
    id: 0,
    name: '',
    age: 0,
    salary: 0,
    address: '',
    position: '',
    status: ''
  })

  const [employees, setEmployees] = useState<Employee[]>([])

  const onAdd = () => {
    setIsOpenDialog(true)
  }

  const onUpdate = (id: number) => {
    // @ts-ignore
    setCurEmployee({...employees.find(e => e.id === id)})
    setIsOpenDialog(true)
  }

  const onSave = async () => {
    // setEmployees([...employees, curEmployee])
    setIsOpenDialog(false)
    // todo: call api and save
    console.log("curEmployee", curEmployee)

    if (curEmployee.id) {
      const newEmployee: Employee = await putMethod(`/employee/${curEmployee.id}`, toBody())
      const updateEmployeeIndex = employees.findIndex(
        (e: Employee) => Number(e.id) === Number(curEmployee.id)
      )
      employees[updateEmployeeIndex] = newEmployee
      console.log(employees, updateEmployeeIndex)
      setEmployees([...employees])
    }
    else {
      const newEmployee: Employee = await postMethod('/employee', toBody())
      setEmployees([...employees, newEmployee])
    }
    // update employees variable
    // setEmployees([...employees, newEmployee])
  }

  const toBody = () => {
    return {
      ...curEmployee,
      age: Number(curEmployee.age),
      salary: Number(curEmployee.salary)
    }
  }

  const onMounted = async () => {
    const employeesData: Employee[] = await getMethod('/employee')
    setEmployees(employeesData)
  }

  useEffect(() => {
    onMounted()
  }, [])

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