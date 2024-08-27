import React from 'react'
import { RiDeleteBack2Line } from "react-icons/ri";


export const BusketCompo = ({quyantity,color}) => {


  console.log(quyantity)

  return (
    <div className="w-full h-fit py-1 my-2 bg-[#adc178] rounded-sm flex relative">

    {/* remove button  */}
    <button className='absolute top-0 right-0 w-10 h-10'>
        < RiDeleteBack2Line className='h-8 w-8 text-red-600' />
    </button>

        {/* image div  */}
    <div className="w-[40%] h-[120px]  grid place-content-center">
    <img className='h-[120px]' src="./Images/Product_images/t_shart (41).jpeg" alt="iamagge" />
    </div>

    {/* information div  */}
    <div className="w-[60%] h-[120px]  grid place-content-center">
        <div className="">
        <p>T-shirt style</p>
        <p>Price : 220 BDT</p>
        <p>Color : {color}</p>
        <p>Quyantity : {quyantity} </p>
        </div>
       

    </div>



</div>

  )
}
