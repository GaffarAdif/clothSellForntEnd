import React from 'react'
import { AiOutlineHome,AiOutlineUser  } from "react-icons/ai";
import { CiShop } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import { MdShoppingCartCheckout } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa6";
import { Link, NavLink } from 'react-router-dom';
import '../GlobalCss/global.css'
import { useSelector } from 'react-redux';

export const Header = () => {

  const possition = 'HeaderFixedPosition'
  const busketArray = useSelector((prev)=>prev.UpdateBusketArray)
  

  console.log(busketArray.length)

  return (
    <div>
        

        <div className="w-full h-10  flex lg:h-[50px]">
          
        {/* logo */}
          <div className="w-[30%]  h-10 lg:h-[50px] flex lg:w-[20%]">

            <div className="w-full h-10 lg:h-[50px] flex justify-center items-center">
              <Link to={"/"} >Logo</Link>
              
            </div>
          </div>

{/* search section  */}
            <div className="w-[70%]  h-10 lg:h-[50px]  flex gap-1 lg:lg:w-[50%]">
              <input className='w-[80%] h-8 mt-1 rounded-sm px-1 lg:h-10 lg:rounded-md bg-transparent border border-black' type="text" name="" id="" placeholder='Search..' />
               <button className='w-[20%] h-8 mt-1 flex justify-center items-center'> <IoSearchOutline className='w-8 h-8' /></button>
            </div>

            {/* manu section  */}
            <div className={` ${window.innerWidth < 1024 ? 'HeaderFixedPosition' : null} lg:w-[55%] lg:h-[50px] lg:flex lg:justify-center lg:items-center lg:gap-8`}>


                <NavLink to='/'  className={({isActive})=> isActive?  `flex flex-col items-center text-[20px]   ` :  `flex flex-col items-center text-[#718355]` } >
                 <  AiOutlineHome className='h-8 w-8 lg:hidden '  />
                 <span className='mt-[-4px] lg:mt-0'>Home</span>
               </NavLink>

               <NavLink to='/busket'  className={({isActive})=> isActive?  `flex flex-col items-center relative text-[20px]   ` :  `flex flex-col items-center relative   text-[#718355]` } >

            {
              busketArray.length > 0 ? <p className='absolute top-[-20px] lg:top-[-7px] right-[17px] lg:right-[-24px] w-6 h-6 bg-[#9cccec98] rounded-full flex items-center justify-center '>
              {busketArray.length}
            </p> : null
            }
                   

                 < MdShoppingCartCheckout className='h-8 w-8 lg:hidden'  />
                 <span className='mt-[-4px] lg:mt-0'>Busket</span>
               </NavLink>
                   
               <NavLink to={'/messenger'}  className={({isActive})=> isActive?  `flex flex-col items-center  text-[20px] ` :  `flex flex-col items-center   text-[#718355]` } >
                 < FaFacebookMessenger className='h-8 w-8 lg:hidden'  />
                 <span className='mt-[-4px] lg:mt-0'>Messenger</span>

               </NavLink>

               <NavLink to='/account'  className={({isActive})=> isActive?  `flex flex-col items-center text-[20px]  ` :  `flex flex-col items-center   text-[#718355]` } >
                 < AiOutlineUser className='h-8 w-8 text lg:hidden'  />
                 <span className='mt-[-4px] hover:text-[12px] lg:mt-0'>Acccount</span>
               </NavLink>


            </div>

          



        </div>
        


    </div>
  )
}
