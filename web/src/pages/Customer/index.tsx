import {FTable, FHeader, CustomerDialog, SearchBar} from '../../components'
import {Customer, Header} from '../../utils'
import {Box} from "@mui/material";
import {useState, useCallback} from "react";
import {useSelector} from "react-redux";
import store, {createCustomer, RootState, updateCustomer} from '../../store'

const headers: Header[] = [
  {name: 'id', text: 'ID'},
  {name: 'name', text: 'Ten'},
  {name: 'companyName', text: 'Cong Ty'},
  {name: 'address', text: 'Dia Chi'},
  {name: 'description', text: 'Mo Ta'},
  {name: 'action', text: ''}
]

const defaultCustomer = {
  id: 0,
  name: '',
  companyName: '',
  address: '',
  description: ''
}

export default () => {
  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false)
  const [curCustomer, setCurCustomer] = useState<Customer>({...defaultCustomer})
  const {data: customers} = useSelector((state: RootState) => state.customers)

  const onAdd = () => {
    setCurCustomer({...defaultCustomer})
    setIsOpenDialog(true)
  }

  const onUpdate = useCallback((id: number) => {
    // @ts-ignore
    setCurCustomer({...customers.find(e => e.id === id)})
    setIsOpenDialog(true)
  }, [customers])

  const onSave = async () => {
    setIsOpenDialog(false)

    // @ts-ignore
    if (curCustomer.id) store.dispatch(updateCustomer({...toBody(), id: curCustomer.id}))
    // @ts-ignore
    else store.dispatch(createCustomer(toBody()))
  }

  const toBody = () => {
    return {
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