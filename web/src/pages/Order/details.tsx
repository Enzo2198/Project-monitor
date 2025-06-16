import {FHeader, FEditableTable} from "../../components";
import {Autocomplete, Button, Grid, TextField} from '@mui/material'
import {useEffect, useState} from "react";
import dayjs from 'dayjs';
import {DesktopDatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Box from "@mui/material/Box";
import {Customer, getMethod, Product, OrderDetail, Employee, postMethod} from "../../utils";
import './index.sass'
import {useSelector} from 'react-redux'
import { RootState } from '../../store';
import {useParams} from "react-router";

const toBody = (order: any) => {
  const orderDetails: OrderDetail[] = order.details
  const details = orderDetails.map((detail: OrderDetail) => {
    return {
      productId: Number(detail.productId),
      price: Number(detail.price),
      quantity: Number(detail.quantity)
    }
  })

  return {
    id: order.id,
    customerId: Number(order.customer?.id),
    saleDate: order.saleDate,
    deliveryAddress: order.deliveryAddress,
    employeeId: Number(order.employee?.id),
    comment: null,
    details: details
  }
}

const emptyDetail = { id: null, productId: '', price: '', quantity: '', amount: '' }

export default function() {
  // get current order from param
  const params = useParams()
  const orderId = Number(params.id)

  // get products / customers / employees from store
  const products: Product[] = useSelector((state: RootState) => state.products).data
  const customers: Customer[] = useSelector((state: RootState) => state.customers).data
  const employees: Employee[] = useSelector((state: RootState) => state.employees).data

  const [headers, setHeaders] = useState([
    { name: 'product', items: products, dropdown: true, width: '30%' },
    { name: 'quantity', width: '15%' },
    { name: 'price', width: '15%' },
    { name: 'amount', width: '15%' },
    { name: 'comment', width: '25%' },
  ])

  const [order, setOrder] = useState({
    id: null,
    customer: {
      id: null, name: ''
    },
    employee: {
      id: null, name: ''
    },
    deliveryAddress: '',
    saleDate: '2025-05-10',
    details: [
      { ...emptyDetail }
    ]
  })

  const onAddNewDetail = () => {
    const details = order.details
    details.push({...emptyDetail})
    setOrder({...order, details})
  }

  const onMounted = async () => {
    // todo (optional) get order from api
    if (orderId === 0) return
    const orderData = await getMethod(`orders/${orderId}`)

    const curOrder = {...orderData}
    const details: OrderDetail[] = curOrder.details.map((detail: any) => {
      return {
        amount: detail.amount,
        id: detail.id,
        price: detail.price,
        productId: detail.product?.id,
        product: detail.product?.name,
        quantity: detail.quantity
      }
    })
    setOrder({...curOrder, details})
  }

  const onSave = async () => {
    console.log(order)
    // create order
    await postMethod('orders', toBody(order))
  }

  const onInput = (value: string, rowIndex: number, columnIndex: number) => {
    // @ts-ignore
    const details: OrderDetail[] = order.details
    const detail = details[rowIndex]

    // if current column this product col -> convert name to id
    if (headers[columnIndex].name === 'product') {
      // @ts-ignore
      detail.productId = products.find((p: Product) => p.name === value).id
    }
    if (detail.quantity && detail.price) detail.amount = detail.quantity * detail.price
  }

  useEffect(() => {
    console.log('order', order)
  }, [order])


  useEffect(() => {
    onMounted()
  }, [])

  useEffect(() => {
    const newHeaders = [...headers]
    newHeaders[0].items = products
    setHeaders([...newHeaders])
  }, [products])

  return (
    <>
      <FHeader title={'Order Details'}/>
      <Box sx={{maxWidth: 1200, margin: 'auto'}} padding={2}>
        <h2 style={{padding: '10px'}}>New Order</h2>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 3 }}>
              <Autocomplete
                fullWidth={true}
                disablePortal
                options={employees}
                size={"small"}
                getOptionLabel={(option: any) => option.name}
                isOptionEqualToValue={(option: Employee, value) => option.id === value.id}
                value={order.employee}
                renderInput={
                  (params) => <TextField {...params} key={order.employee?.id} label="Employee Name" />
                }
                onChange={(_event, newValue: Customer) => {
                  setOrder({...order, employee: newValue})
                }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <Autocomplete
                fullWidth={true}
                disablePortal
                options={customers}
                size={"small"}
                value={order.customer}
                getOptionLabel={(option: any) => option.name}
                isOptionEqualToValue={(option: Customer, value) => option.id === value.id}
                renderInput={
                  (params) => <TextField {...params} key={order.customer?.id} label="Customer Name" />
                }
                onChange={(_event, newValue: Customer) => {
                  setOrder({...order, customer: newValue, deliveryAddress: newValue?.address})
                }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <TextField
                fullWidth
                label="Address"
                variant="outlined"
                value={order.deliveryAddress}
                onChange={e => setOrder({...order, deliveryAddress: e.target.value})}
                size={"small"}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <DesktopDatePicker
                sx={{width: '100%'}}
                defaultValue={dayjs(order.saleDate)}
                onChange={(value) => setOrder({...order, saleDate: value.format('YYYY-MM-DD')})}
              />
            </Grid>
          </Grid>
        </LocalizationProvider>

        <h2 style={{padding: '10px'}}>Order Details</h2>
        <Button variant={'outlined'} onClick={onAddNewDetail}>Add new detail</Button>
        <Button variant={'outlined'} onClick={onSave}>Save</Button>

        <FEditableTable columns={headers} rows={order.details} onInput={onInput}/>
      </Box>
    </>
  )
}