import React, { useState } from 'react'
import { Header } from '../Components/Header'
import SimpleSlider from '../Components/Slider'
import { CatagorisList } from '../Components/CatagorisList'
import { Card } from '../Components/Card'
import { FaAngleDown } from "react-icons/fa6";
import { useSelector } from 'react-redux'


export const Home = () => {
  const dataMy = useSelector((state)=>{return state.UpdateBusketArray})
  console.log(dataMy)
  // for catagoris state 
  const [Showcartagori,setShowcartagori] = useState(true)

  // for catagoris state 

  



  return (

    <div className="w-full px-5">
        <Header />
        <div className="mt-3 overflow-hidden">

        < SimpleSlider />
        </div>
        
        <div   className="mt-3  bg-[#798086] p-1 relative rounded-md h-fit  md:py-5">

          <div onClick={()=> setShowcartagori((prev)=> !prev)}  className="">
          <button className='absolute top-1 right-2 md:top-[50%] md:translate-y-[-50%]'> <FaAngleDown className='text-[25px] md:text-[35px]' /> </button>
          <div className="">
            <p>Show Catagoris</p>
          </div>
          </div>

        
        {
          Showcartagori ?   null : < CatagorisList />
        }
          
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-5">
          < Card />
          < Card />
          < Card />
          < Card />
          < Card />
          < Card />
          < Card />
          < Card />
          < Card />
          < Card />
          < Card />
          < Card />
        </div>



    </div>
   
    




  )
}
