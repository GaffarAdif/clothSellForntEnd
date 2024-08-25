import React from 'react'
import { AiOutlineHome,AiOutlineUser  } from "react-icons/ai";
import { CiShop } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import { MdShoppingCartCheckout } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa6";
import { Link, NavLink } from 'react-router-dom';
export const Header = () => {
  return (
    <div>
        

        {/* logo */}
        <div className="w-full h-10 ">
          
          <div className="w-full h-10 flex">
            <div className="w-[30%]  h-10  grid place-content-center">
              <Link to={"/"} >Logo</Link>
              
            </div>

            <div className="w-[70%]  h-10  flex gap-1">

              <input className='w-[80%] h-8 mt-1 rounded-md px-1' type="text" name="" id="" placeholder='Search..' />
               <button className='w-[20%] h-8 mt-1'> <IoSearchOutline className='w-8 h-8' /></button>

            </div>

          </div>




            <div className='fixed bottom-3 left-0 w-[90%] mx-[5%] h-[60px] rounded-md bg-[#b0c4b1]
            grid grid-cols-4 py-1
            '>
                <NavLink to='/'  className={({isActive})=> isActive?  `flex flex-col items-center  ` :  `flex flex-col items-center text-[#718355]` } >
                  <  AiOutlineHome className='h-8 w-8'  />
                  <span className='mt-[-4px]'>Home</span>
                </NavLink>
                <NavLink to='/busket'  className={({isActive})=> isActive?  `flex flex-col items-center relative  ` :  `flex flex-col items-center relative   text-[#718355]` } >

                    <p className='absolute top-[-20px] right-[17px] w-6 h-6 bg-[#ffb3c6] rounded-full flex items-center justify-center'>
                      1
                    </p>

                  < MdShoppingCartCheckout className='h-8 w-8'  />
                  <span className='mt-[-4px]'>Busket</span>
                </NavLink>
                    
                <NavLink to={'/messenger'}  className={({isActive})=> isActive?  `flex flex-col items-center   ` :  `flex flex-col items-center   text-[#718355]` } >


                  < FaFacebookMessenger className='h-8 w-8'  />
                  <span className='mt-[-4px]'>Messenger</span>

                </NavLink>

                <NavLink to='/account'  className={({isActive})=> isActive?  `flex flex-col items-center   ` :  `flex flex-col items-center   text-[#718355]` } >

                  < AiOutlineUser className='h-8 w-8 text'  />
                  <span className='mt-[-4px] hover:text-[12px]'>Acccount</span>
                </NavLink>



     



            </div>


        </div>
        


    </div>
  )
}
