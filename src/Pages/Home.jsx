import React, { useState } from 'react'
import { Header } from '../Components/Header'
import SimpleSlider from '../Components/Slider'
import { CatagorisList } from '../Components/CatagorisList'
import { Card } from '../Components/Card'
import { FaAngleDown } from "react-icons/fa6";
import { useSelector } from 'react-redux'
import Loader from '../Components/Loader/Loader'


export const Home = () => {
  const dataMy = useSelector((state)=>{return state.UpdateBusketArray})
  console.log(dataMy)
  // for catagoris state 
  const [Showcartagori,setShowcartagori] = useState(true)

  // for catagoris state 

  



  return (

    <div className="w-full h-fit px-5">

      {/* < Loader /> */}



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
          < Card  ProductId={1}  productname={'T-Shirt'} productPrice={210}/>
          < Card  ProductId={2}  productname={'T-Shirt'} productPrice={220}/>
          < Card  ProductId={3}  productname={'T-Shirt'} productPrice={230}/>
          < Card  ProductId={4}  productname={'T-Shirt'} productPrice={240}/>
          < Card  ProductId={5}  productname={'T-Shirt'} productPrice={250}/>
          < Card  ProductId={6}  productname={'T-Shirt'} productPrice={260}/>
          < Card  ProductId={7}  productname={'T-Shirt'} productPrice={270}/>
          < Card  ProductId={8}  productname={'T-Shirt'} productPrice={280}/>
          < Card  ProductId={9}  productname={'T-Shirt'} productPrice={290}/>
          < Card  ProductId={10} productname={'T-Shirt'} productPrice={300} />
          < Card  ProductId={11} productname={'T-Shirt'} productPrice={310} />
          < Card  ProductId={12} productname={'T-Shirt'} productPrice={320} />
        </div>



    </div>
   
    




  )
}
