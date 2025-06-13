// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from "./router"
import store, {getProducts, getCustomers, getColors, getEmployees} from './store'
import {Provider} from "react-redux";
import {RouterProvider} from "react-router";
import {ToastContainer} from "react-toastify";


const root = document.getElementById("root");

store.dispatch(getProducts())
store.dispatch(getCustomers())
store.dispatch(getColors())
store.dispatch(getEmployees())

createRoot(root!).render(
  <>
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer />
    </Provider>
  </>
)
