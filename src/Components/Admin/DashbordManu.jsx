import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdSpaceDashboard } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaBusinessTime } from "react-icons/fa";

export const DashbordManu = () => {

  return (
    <div className='w-full h-fit px-5 '>
        
        <div className="w-full h-10  flex justify-center items-center">
            <NavLink to={'/admin/dashbord/admin-adif/home'} >
            Dasbord
            </NavLink>
        </div>

        <div className="fixed bottom-4 left-[5%] w-[90%] h-[55px] bg-[#ccd5ae] rounded-lg grid grid-cols-3">

        <NavLink to='/admin/dashbord/' end className={({isActive})=> isActive?  `flex flex-col items-center text-[20px]   ` :  `flex flex-col items-center text-[#718355]` } >
                 <  MdSpaceDashboard className='h-8 w-8 lg:hidden '  />
                 <span className='mt-[-4px] lg:mt-0'>dhasbord</span>
         </NavLink>

        <NavLink to='/admin/dashbord/product'  className={({isActive})=> isActive?  `flex flex-col items-center text-[20px]   ` :  `flex flex-col items-center text-[#718355]` } >
                 <  MdOutlineProductionQuantityLimits className='h-8 w-8 lg:hidden '  />
                 <span className='mt-[-4px] lg:mt-0'>Product</span>
         </NavLink>
        <NavLink to='/admin/dashbord/order'  className={({isActive})=> isActive?  `flex flex-col items-center text-[20px]   ` :  `flex flex-col items-center text-[#718355]` } >
                 <  FaBusinessTime className='h-8 w-8 lg:hidden '  />
                 <span className='mt-[-4px] lg:mt-0'>Order</span>
         </NavLink>

        </div>
        


    </div>
  )
}
