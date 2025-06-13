import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {Customer, getMethod, postMethod, putMethod} from "../../utils";


export const getCustomers = createAsyncThunk('customers/getCustomers', async () => {
  return await getMethod('/customers/')
})

export const createCustomer = createAsyncThunk('customers/createCustomer', async (customer: Customer) => {
  return await postMethod('/customers/', customer)
})

export const updateCustomer = createAsyncThunk('customers/update', async (customer: Customer) => {
  return await putMethod(`/customers/${customer.id}`, customer)
})

const customersSlice = createSlice({
  name: 'customers',
  initialState: {
    isLoading: false,
    data: []
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getCustomers.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getCustomers.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload
    })
    builder.addCase(createCustomer.fulfilled, (state, action) => {
      state.isLoading = false
      // @ts-ignore
      state.data = [...state.data, action.payload]
    })
    builder.addCase(updateCustomer.fulfilled, (state, action) => {
      state.isLoading = false

      const updateIndex = state.data.findIndex(
        (e: any) => Number(e.id) === Number(action.payload.id)
      )
      // @ts-ignore
      state.data[updateIndex] = action.payload
    })
  }
})

export default customersSlice.reducer

export const { ...actions } =  customersSlice