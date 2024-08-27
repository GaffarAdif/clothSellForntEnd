import { useState } from 'react'
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
    
  }

])


function App() {


  return (
    <>
    
    < RouterProvider router={router} />
    
    </>
  )
}

export default App
