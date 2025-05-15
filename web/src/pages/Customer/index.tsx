import {FTable, FHeader, CustomerDialog, SearchBar} from '../../components'
import {Customer, Header} from '../../utils'
import {Box} from "@mui/material";
import {useState, useEffect, useCallback} from "react";
import {getMethod, postMethod, putMethod} from "../../utils/api.ts";

const headers: Header[] = [
  {name: 'id', text: 'ID'},
  {name: 'name', text: 'Ten'},
  {name: 'companyName', text: 'Cong Ty'},
  {name: 'address', text: 'Dia Chi'},
  {name: 'description', text: 'Mo Ta'},
  {name: 'action', text: ''}
]


export default () => {
  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false)
  const [curCustomer, setCurCustomer] = useState<Customer>({
    id: 0,
    name: '',
    companyName: '',
    address: '',
    description: ''
  })

  const [customers, setCustomers] = useState<Customer[]>([])

  const onAdd = () => {
    setIsOpenDialog(true)
  }

  const onUpdate = useCallback((id: number) => {
    // @ts-ignore
    setCurCustomer({...customers.find(e => e.id === id)})
    setIsOpenDialog(true)
  }, [customers])

  const onSave = async () => {
    setIsOpenDialog(false)

    if (curCustomer.id) {
      const newCustomer: Customer = await putMethod(`/customers/${curCustomer.id}`, toBody())
      const updateIndex = customers.findIndex(
        (e: Customer) => Number(e.id) === Number(curCustomer.id)
      )
      customers[updateIndex] = newCustomer
      setCustomers([...customers])
    }
    else {
      const newCustomer: Customer = await postMethod('/customers', toBody())
      setCustomers([...customers, newCustomer])
    }
  }

  const toBody = () => {
    return {
      name: curCustomer.name,
      companyName: curCustomer.companyName,
      address: curCustomer.address,
      description: curCustomer.description
    }
  }

  const onMounted = async () => {
    const customersData = await getMethod('/customers')
    console.log(customersData)
    setCustomers([...customersData])
  }

  useEffect(() => {
    onMounted()
  }, [])

  return (
    <>
      <FHeader title={'Customers'}/>
      <Box className={'container'}>
        <SearchBar onAdd={onAdd}/>

        <FTable
          headers={headers}
          rows={customers}
          onUpdate={onUpdate}
        />
        <CustomerDialog
          customer={curCustomer}
          setCustomer={setCurCustomer}
          onSave={onSave}
          isOpen={isOpenDialog}
          onClose={() => setIsOpenDialog(false)}
        />
      </Box>
    </>
  )
}