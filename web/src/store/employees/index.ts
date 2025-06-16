import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {getMethod, postMethod, Employee, putMethod} from "../../utils";


export const getEmployees = createAsyncThunk('employees/getEmployees', async () => {
  return await getMethod('/employees/')
})

export const createEmployee = createAsyncThunk('employees/createEmployee', async (employee) => {
  return await postMethod('/employees/', employee)
})

export const updateEmployee = createAsyncThunk('employees/update', async (employee: Employee) => {
  return await putMethod(`/employees/${employee.id}`, employee)
})


const employeesSlice = createSlice({
  name: 'employees',
  initialState: {
    isLoading: false,
    data: []
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getEmployees.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getEmployees.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload
    })
    builder.addCase(createEmployee.fulfilled, (state, action) => {
      state.isLoading = false
      // @ts-ignore
      state.data = [...state.data, action.payload]
    })
    builder.addCase(updateEmployee.fulfilled, (state, action) => {
      state.isLoading = false

      const updateIndex = state.data.findIndex(
        (e: any) => Number(e.id) === Number(action.payload.id)
      )
      // @ts-ignore
      state.data[updateIndex] = action.payload
    })
  }
})

export default employeesSlice.reducer

export const { ...actions } =  employeesSlice