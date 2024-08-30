import { lazy, useState } from 'react'
import './App.css'
import { Home } from './Pages/Home'
import {Busket} from './Pages/Busket'
import {Account} from './Pages/Account'
import {Order} from './Pages/Order'
import {ConfirmBuy} from './Pages/ConfirmBuy'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Logging } from './Components/loging'
import { Registration } from './Components/Registration'
import { MassengerPage } from './Pages/MassengerPage'
import { Admin } from './Pages/Admin/AdminLoing'
import { Dashbord } from './Pages/Admin/Dashbord'
import { ProductPage } from './Pages/Admin/ProductPage'
import { OrderAdminPage } from './Pages/Admin/OrderAdminPage'
import { ProductAdd } from './Pages/Admin/ProductAdd'

// const Home = lazy(()=> import('./Pages/Home') )


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
    
  },
  {
    path: '/busket',
    element: <Busket />
    
  },
  {
    path: '/messenger',
    element: < MassengerPage />
    
  },
  {
    path: '/account',
    element: <Account />,
  },
  {
    path : '/account/loging',
    element : <Logging />
  },
  {
    path : '/account/registration',
    element : <Registration />
  },
  {
    path: '/order/:id',
    element: < Order />
    
  },
  {
    path: '/confirmorder',
    element: < ConfirmBuy />
  },
  {
    path: '/admin',
    element: < Admin />
  },
  {
    path: '/admin/dashbord/',
    element: <Dashbord />
  },
  {
    path: '/admin/dashbord/product',
    element: <ProductPage />
  },
  {
    path: '/admin/dashbord/product/add',
    element: < ProductAdd />
  },
  {
    path: '/admin/dashbord/order',
    element: <OrderAdminPage />
  },

])


function App() {


  return (
    <>
    
    < RouterProvider router={router} />
    
    </>
  )
}

export default App
