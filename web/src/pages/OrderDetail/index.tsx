import {FHeader} from "../../components";
import {Autocomplete, Button, Grid, TextField} from '@mui/material'
import {useEffect, useState} from "react";
import dayjs from 'dayjs';
import {DesktopDatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Box from "@mui/material/Box";

interface OrderDetailProps {
  products: Product[]
}

const OrderDetailComponent = ({products}: OrderDetailProps) => {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 3 }}>
        <Autocomplete
          fullWidth={true}
          disablePortal
          options={[]}
          getOptionLabel={(option: any) => option.name}
          getOptionKey={(option) => option.id}
          renderInput={
            (params) => <TextField {...params} label="Product Name" value={''} />
          }
        />
      </Grid>
      <Grid size={{ xs: 12, md: 3 }}>
        <TextField
          fullWidth
          label="Price"
          variant="outlined"
        />
      </Grid>
      <Grid size={{ xs: 12, md: 3 }}>
        <TextField
          fullWidth
          label="Quantity"
          variant="outlined"
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
  const emptyDetail = { id: null, productsId: '', price: '', quantity: '', amount: '' }
  const [customers, setCustomers] = useState<Custommer[]>([])
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
    //get data from api
    const [customersData, productsData] = await Promise.all([
        getmethod('/customers/'), getmethod('/products/')
    ])
    setCustomers(customersData)
    setProducts(productsData)
  }

  useEffect(() => {
    onmounted()
  }, []);

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
                getOptionKey={(option: Custommer) => option.id}
                renderInput={
                  (params) => <TextField {...params} label="Customer Name" value={order.customer?.name} />
                }
                onChange={(event, newValue) => {
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
            return <OrderDetailComponent/>
          })
        }
      </Box>
    </>
  )
}