// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Product from './pages/Product'
import Employee from './pages/Employee'
// import App from './App.tsx'

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";

const router = createBrowserRouter([
    {
        path: "/hello",
        element: <div>Hello World</div>,
    },
    {
        path: "/product",
        element: <Product/>,
    },
    {
        path: "/employee",
        element: <Employee/>,
    },
]);

const root = document.getElementById("root");

createRoot(root!).render(
    <RouterProvider router={router} />
)
