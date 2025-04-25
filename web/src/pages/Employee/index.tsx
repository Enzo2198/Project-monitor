import {FTable} from "../../components";
import {Header, Employee} from "../../utils";


export default () => {
  const headers: Header[] = [
    {name: 'id', text: 'ID'},
    {name: 'name', text: 'Ten'},
    {name: 'age', text: 'Tuoi'},
    {name: 'address', text: 'Dia Chi'},
    {name: 'action', text: ''},
  ]

  const employees: Employee[] = [
    {id: 1, name: 'Dung', age: 20, address: 'Thanh Oai - Ha Noi'},
    {id: 2, name: 'Trung', age: 22, address: 'Quoc Oai - Ha Noi'},
    {id: 3, name: 'Son', age: 30, address: 'Thanh Oai 2 - Ha Noi'},
  ]
  return (
    <>
      <FTable tableName={'Employee'} headers={headers} rows={employees}/>
    </>
  )
}