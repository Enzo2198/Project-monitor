import {FTable, FHeader, SearchBar} from '../../components'
import {Header, Order} from '../../utils'
import {Box} from "@mui/material";
import {useSelector} from "react-redux";
import store, {RootState, deleteOrder} from "../../store";
import { useNavigate } from 'react-router';

const headers: Header[] = [
  {name: 'id', text: 'ID'},
  {name: 'customerName', text: 'Customer Name'},
  {name: 'employeeName', text: 'Employee Name'},
  {name: 'deliveryAddress', text: 'Delivery Address'},
  {name: 'saleDate', text: 'Sale Date'},
  {name: 'action', text: ''}
]


export default () => {
  const navigate = useNavigate()
  const {data : orders} = useSelector((state: RootState) => state.orders)


  const dataOrders= orders.map((order:Order)=>{
    return {...order, customerName: order.customer.name, employeeName: order.employee.name}

  })
  const onAdd = () => {
    navigate('/order/0')
  }

  const onUpdate = (id:number) => {
    navigate(`/order/${id}`)
  }

  const  onDelete = async (id:number) => {
    await store.dispatch(deleteOrder(id))

  }




  return (
    <>
      <FHeader title={'Orders'}/>
      <Box className={'container'}>
        <SearchBar onAdd={onAdd}/>

        <FTable
          headers={headers}
          rows={dataOrders}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      </Box>
    </>
  )
}