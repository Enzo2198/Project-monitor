import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {Product, getMethod, putMethod, postMethod} from "../../utils";


export const getProducts = createAsyncThunk('products/getProducts', async () => {
  return await getMethod('/products/')
})

export const createProduct = createAsyncThunk('products/createProduct', async (product: Product) => {
  return await postMethod('/products/', product)
})

export const updateProduct = createAsyncThunk('products/update', async (product: Product) => {
  return await putMethod(`/products/${product.id}`, product)
})


const productsSlice = createSlice({
  name: 'products',
  initialState: {
    isLoading: false,
    data: []
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload
    })
    builder.addCase(createProduct.fulfilled, (state, action) => {
      state.isLoading = false
      // @ts-ignore
      state.data = [...state.data, action.payload]
    })
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      state.isLoading = false

      const updateIndex = state.data.findIndex(
        (e: any) => Number(e.id) === Number(action.payload.id)
      )
      // @ts-ignore
      state.data[updateIndex] = action.payload
    })
  }
})

export default productsSlice.reducer

export const { ...actions } =  productsSlice