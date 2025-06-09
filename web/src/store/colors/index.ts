import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {getMethod, postMethod, putMethod, deleteMethod, Color} from "../../utils";

interface ColorsState {
  isLoading: boolean;
  data: Color[];
  error: string
}

const initialState: ColorsState = {
  isLoading: false,
  data: [],
  error: ''
};

export const getColors = createAsyncThunk<Color[]>('colors/getColors', async () => {
  return await getMethod('/colors/')
})

export const createColor = createAsyncThunk('colors/createColor', async (color) => {
  return await postMethod('/colors/', color)
})

export const editColor = createAsyncThunk<Color, Color>('colors/editColor', async (color) => {
  return await putMethod(`/colors/${color.id}`, color)
})

export const deleteColor = createAsyncThunk('colors/deleteColor', async (id) => {
  await deleteMethod(`/colors/${id}`)
  return id;
})

const customersSlice = createSlice({
  name: 'colors',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // Get data
    builder.addCase(getColors.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getColors.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload
    })
    builder.addCase(getColors.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message || 'Cannot get data color'
    })

    // Create new data
    builder.addCase(createColor.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(createColor.fulfilled, (state, action) => {
      state.isLoading = false
      // @ts-ignore
      state.data = [...state.data, action.payload]
    })
    builder.addCase(createColor.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message || 'Cannot add new data color'
    })

    // Edit data
    builder.addCase(editColor.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(editColor.fulfilled, (state, action) => {
      const index = state.data.findIndex(c => c.id === action.payload.id);
      if (index !== -1) {
        state.data[index] = action.payload;
      }
    })
    builder.addCase(editColor.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message || 'Cannot edit data color'
    })

    // Delete data
    builder.addCase(deleteColor.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(deleteColor.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = state.data.filter(c => c.id !== action.payload);
    })
    builder.addCase(deleteColor.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message || 'Cannot delete data color'
    })
  }
})

export default customersSlice.reducer

export const { ...actions } =  customersSlice