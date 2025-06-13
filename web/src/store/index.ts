import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './products'
import customersReducer from './customers'
import colorsReducer from './colors'
import employeesReducer from './employees'

const store = configureStore({
  reducer: {
    products: productsReducer,
    customers: customersReducer,
    colors: colorsReducer,
    employees: employeesReducer
  }
})

export default store


// @ts-ignore
export * from './products'
// @ts-ignore
export * from './customers'
// @ts-ignore
export * from './colors'
// @ts-ignore
export * from './employees'
export type RootState = ReturnType<typeof store.getState>
