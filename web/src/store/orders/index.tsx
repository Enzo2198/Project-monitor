import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {deleteMethod, getMethod, Order} from "../../utils";


export const getOrders = createAsyncThunk('orders/getOrders', async () => {
  return await getMethod('/orders/')
})
export const deleteOrder = createAsyncThunk('orders/deleteOrder', async (id: number)=>{
  await deleteMethod(`/orders/${id}`);
  return {id};
})


const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    isLoading: false,
    data: [],
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getOrders.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getOrders.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload
    })
    builder.addCase(deleteOrder.fulfilled, (state, action)=>{
      state.isLoading = false;
      state.data = state.data.filter((order:Order) => order.id !== action.payload.id);
    })
  }
})

export default ordersSlice.reducer

export const { ...actions } =  ordersSlice
