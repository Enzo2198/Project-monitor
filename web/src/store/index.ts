import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './products'
import customersReducer from './customers'
import colorsReducer from './colors'

const store = configureStore({
  reducer: {
    products: productsReducer,
    customers: customersReducer,
    colors: colorsReducer
  }
})

export default store


// @ts-ignore
export * from './products'
// @ts-ignore
export * from './customers'
// @ts-ignore
export * from './colors'
