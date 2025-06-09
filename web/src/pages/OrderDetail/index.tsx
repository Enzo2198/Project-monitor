import {FHeader} from "../../components";
import {Autocomplete, Button, Grid, TextField} from '@mui/material'
import {useEffect, useState} from "react";
import dayjs from 'dayjs';
import {DesktopDatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Box from "@mui/material/Box";
import {Customer, getMethod, Product, OrderDetail} from "../../utils";

interface OrderDetailProps {
  products: Product[]
  detail: OrderDetail
  index: number
  order: any,
  setOrder: (order: any) => void
}

const OrderDetailComponent = ({detail, products, index, order, setOrder}: OrderDetailProps) => {
  const onInput = (value, key) => {
    console.log(order)
    console.log(value, key, isNaN(Number(value)), index)

    let isValid = !isNaN(Number(value))

    const newDetails = order.details
    newDetails[index] = { ...newDetails[index], [key]: value, isValid }
    setOrder({
      ...order, details: newDetails
    })
  }

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 3 }}>
        <Autocomplete
          fullWidth={true}
          disablePortal
          options={products}
          getOptionLabel={(option: any) => option.name}
          getOptionKey={(option) => option.id}
          renderInput={
            (params) => <TextField {...params} label="Product Name" value={''} />
          }
        />
      </Grid>
      <Grid size={{xs: 12, md: 3}}>
        <TextField
          fullWidth
          label="Price"
          variant="outlined"
        />
      </Grid>
      <Grid size={{ xs: 12, md: 3 }}>
        <TextField
          value={detail.quantity}
          onChange={(e) => onInput(e.target.value, 'quantity')}
          fullWidth
          label="Quantity"
          variant="outlined"
          error={!detail.isValid}
          helperText={detail.isValid ? null : "quantity must be number"}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 3 }}>
        <TextField
          fullWidth
          label="Amount"
          variant="outlined"
        />
      </Grid>
    </Grid>
  )
}

export default function() {
  const emptyDetail = { id: null, productsId: '', price: '', quantity: '', amount: '', isValid: true }
  const [customers, setCustomers] = useState<Customer[]>([])
  const [products, setProducts] = useState<Product[]>([])

  const [order, setOrder] = useState({
    id: null,
    customer: {
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
    // get data from api
    const [customerData, productData] = await Promise.all([
      getMethod('/customers/'), getMethod('/products')
    ])
    setCustomers(customerData)
    setProducts(productData)
  }

  useEffect(() => {
    onMounted()
  }, [])

  return (
    <>
      <FHeader title={'Order Details'}/>
      <Box sx={{maxWidth: 1200, margin: 'auto'}} padding={2}>
        <h2 style={{padding: '10px'}}>New Order</h2>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Autocomplete
                fullWidth={true}
                disablePortal
                options={customers}
                getOptionLabel={(option: any) => option.name}
                getOptionKey={(option: Customer) => option.id}
                renderInput={
                  (params) => <TextField {...params} label="Customer Name" value={order.customer?.name} />
                }
                onChange={(event, newValue: Customer) => {
                  setOrder({...order, customer: newValue, deliveryAddress: newValue?.address})
                }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <TextField
                fullWidth
                label="Address"
                variant="outlined"
                value={order.deliveryAddress}
                onChange={e => setOrder({...order, deliveryAddress: e.target.value})}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <DesktopDatePicker
                sx={{width: '100%'}}
                defaultValue={dayjs(order.saleDate)}
                onChange={(value) => setOrder({...order, saleDate: value.format('YYYY-MM-DD')})}
              />
            </Grid>
          </Grid>
        </LocalizationProvider>

        <h2 style={{padding: '10px'}}>Order Details</h2>
        <Button onClick={onAddNewDetail}>Add new detail</Button>
        {
          order.details.map((detail, index) => {
            return (
              <OrderDetailComponent
                key={index}
                index={index}
                detail={detail}
                order={order}
                setOrder={setOrder}
                products={products}
              />
            )
          })
        }
      </Box>
    </>
  )
}