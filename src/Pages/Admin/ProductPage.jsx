import React from 'react'
import { DashbordManu } from '../../Components/Admin/DashbordManu'
import {  Link, useNavigate } from 'react-router-dom'
import '../../GlobalCss/global.css'

export const ProductPage = () => {

    const adminCheck = sessionStorage.getItem('admin') || null

    const navigate = useNavigate()
    
    if(adminCheck){




        return (
            <div className='w-full h-screen'>
                 <DashbordManu />
                 <div className="divHightWithoutHeader  flex justify-center items-center">

                    <div className="w-[90%] h-[250px] bg-blue-400 rounded-md flex gap-3 flex-col justify-center items-center ">

                    < Link to={'/admin/dashbord/product/add'} className='w-[80%] h-10 bg-purple-400 rounded-md flex justify-center items-center' >
                        Add New Product
                    </Link>
                    
                    < Link className='w-[80%] h-10 bg-purple-400 rounded-md flex justify-center items-center' >
                        Edit Product
                    </Link>

                    < Link className='w-[80%] h-10 bg-purple-400 rounded-md flex justify-center items-center' >
                        Remove Product
                    </Link>

                    </div>



                 </div>
            </div>
          )
    }else{
        setTimeout(() => {
            navigate('/admin')
                
            }, 200);


        }



        


}
