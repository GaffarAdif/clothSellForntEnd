import React, { useState } from 'react'
import { Header } from '../Components/Header'
import SimpleSlider from '../Components/Slider'
import { CatagorisList } from '../Components/CatagorisList'
import { Card } from '../Components/Card'
import { FaAngleDown } from "react-icons/fa6";


export const Home = () => {
  // for catagoris state 
  const [Showcartagori,setShowcartagori] = useState(true)

  // for catagoris state 

  

  return (

    <div className="w-full px-5">
        <Header />
        <div className="mt-3 overflow-hidden">

        < SimpleSlider />
        </div>
        
        <div   className="mt-3  bg-[#798086] p-1 relative rounded-md h-fit ">

          <div onClick={()=> setShowcartagori((prev)=> !prev)}  className="">
          <button className='absolute top-1 right-2'> <FaAngleDown className='text-[25px]' /> </button>
          <div className="">
            <p>Show Catagoris</p>
          </div>
          </div>

        
        {
          Showcartagori ?   null : < CatagorisList />
        }
          
        </div>

        <div className="mt-3">
          < Card />
        </div>



    </div>
   
    




  )
}
