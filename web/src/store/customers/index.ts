import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {getMethod, postMethod, putMethod, deleteMethod, Customer} from "../../utils";

interface CustomersState {
  isLoading: boolean;
  data: Customer[];
}

const initialState: CustomersState = {
  isLoading: false,
  data: []
};

export const getCustomers = createAsyncThunk<Customer[]>('customers/getCustomers', async () => {
  return await getMethod('/customers/')
})

export const createCustomer = createAsyncThunk('customers/createCustomer', async (customer) => {
  return await postMethod('/customers/', customer)
})

export const editCustomer = createAsyncThunk<Customer, Customer>('customers/editCustomer', async (customer) => {
  return await putMethod(`/customers/${customer.id}`, customer)
})

export const deleteCustomer = createAsyncThunk('customers/deleteCustomer', async (id) => {
  await deleteMethod(`/customers/${id}`)
  return id;
})

const customersSlice = createSlice({
  name: 'customers',
  initialState,
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
    builder.addCase(editCustomer.fulfilled, (state, action) => {
      const index = state.data.findIndex(c => c.id === action.payload.id);
      if (index !== -1) {
        state.data[index] = action.payload;
      }
    })
    builder.addCase(deleteCustomer.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = state.data.filter(c => c.id !== action.payload);
    })
  }
})

export default customersSlice.reducer

export const { ...actions } =  customersSlice