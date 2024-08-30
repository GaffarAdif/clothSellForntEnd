import React from 'react'

import { DashbordManu } from '../../Components/Admin/DashbordManu'
import { useNavigate } from 'react-router-dom'

export const OrderAdminPage = () => {

     const adminCheck = sessionStorage.getItem('admin') || null

     const navigate = useNavigate()

          if(adminCheck){

               return (
                    <div className='w-full h-fit'>
                         <DashbordManu />
                         <h1>Order Admin Page</h1>
                        
                    </div>
                  )
          }else{
               setTimeout(() => {
                   navigate('/admin')
                       
                   }, 200);
   
   
               }

      



}
