import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './products'
import customersReducer from './customers'
import colorsReducer from './colors'
import employeesReducer from './employees'
import ordersReducer from './orders'

const store = configureStore({
  reducer: {
    products: productsReducer,
    customers: customersReducer,
    colors: colorsReducer,
    employees: employeesReducer,
    orders: ordersReducer,
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
// @ts-ignore
export * from './orders'
export type RootState = ReturnType<typeof store.getState>
