import {FTable, FHeader, CustomerDialog, SearchBar} from '../../components'
import {Customer, Header} from '../../utils'
import {Box} from "@mui/material";
import {useState, useCallback} from "react";
import {useSelector} from "react-redux";
import store, {createCustomer, editCustomer, deleteCustomer} from '../../store'

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

  const {isLoading, data: customers} = useSelector(state => state.customers)
  // const [customers, setCustomers] = useState<Customer[]>([])

  const onAdd = () => {
    setCurCustomer({
      id: 0,
      name: '',
      companyName: '',
      address: '',
      description: ''
    });
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
      // @ts-ignore
      store.dispatch(editCustomer(toBody()))
    }
    else {
      // @ts-ignore
      store.dispatch(createCustomer(toBody()))
    }
  }

  const onDelete = (id: number) => {
    // @ts-ignore
    store.dispatch(deleteCustomer(id))
  }

  const toBody = () => {
    return {
      id: curCustomer.id,
      name: curCustomer.name,
      companyName: curCustomer.companyName,
      address: curCustomer.address,
      description: curCustomer.description
    }
  }

  return (
    <>
      <FHeader title={'Customers'}/>
      <Box className={'container'}>
        <SearchBar onAdd={onAdd}/>

        <FTable
          headers={headers}
          rows={customers}
          onUpdate={onUpdate}
          onDelete={onDelete}
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