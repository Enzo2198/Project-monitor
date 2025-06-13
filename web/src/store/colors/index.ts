import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {getMethod, postMethod, Color, putMethod} from "../../utils";


export const getColors = createAsyncThunk('colors/getColors', async () => {
  return await getMethod('/colors/')
})

export const createColor = createAsyncThunk('colors/createColor', async (color) => {
  return await postMethod('/colors/', color)
})

export const updateColor = createAsyncThunk('colors/update', async (color: Color) => {
  return await putMethod(`/colors/${color.id}`, color)
})


const colorsSlice = createSlice({
  name: 'colors',
  initialState: {
    isLoading: false,
    data: []
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getColors.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getColors.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload
    })
    builder.addCase(createColor.fulfilled, (state, action) => {
      state.isLoading = false
      // @ts-ignore
      state.data = [...state.data, action.payload]
    })
    builder.addCase(updateColor.fulfilled, (state, action) => {
      state.isLoading = false

      const updateIndex = state.data.findIndex(
        (e: any) => Number(e.id) === Number(action.payload.id)
      )
      // @ts-ignore
      state.data[updateIndex] = action.payload
    })
  }
})

export default colorsSlice.reducer

export const { ...actions } =  colorsSlice