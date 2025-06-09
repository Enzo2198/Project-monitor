import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {getMethod, postMethod, putMethod, deleteMethod, Product} from "../../utils";

interface productsState {
  isLoading: boolean;
  data: Product[];
}

const initialState: productsState = {
  isLoading: false,
  data: []
};

export const getProducts = createAsyncThunk('products/getProducts', async () => {
  return await getMethod('/products/')
})

export const createProduct = createAsyncThunk('products/createProduct', async (product) => {
  return await postMethod('/products/', product)
})

export const editProduct = createAsyncThunk<Product, Product>('products/editProduct', async (product) => {
  return await putMethod(`/products/${product.id}`, product)
})

export const deleteProduct = createAsyncThunk('products/deleteProduct', async (id) => {
  await deleteMethod(`/products/${id}`)
  return id;
})


const productsSlice = createSlice({
  name: 'products',
  initialState,
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

    builder.addCase(editProduct.fulfilled, (state, action) => {
      const index = state.data.findIndex(c => c.id === action.payload.id);
      if (index !== -1) {
        state.data[index] = action.payload;
      }
    })

    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = state.data.filter(c => c.id !== action.payload);
    })
  }
})

export default productsSlice.reducer

export const { ...actions } =  productsSlice