import React from 'react'
import { Header } from '../Components/Header'
import { RiDeleteBack2Line } from "react-icons/ri";

export const Busket = () => {
  return (
    <div className='mx-5 '>
        < Header />

        {/* main div */}

    <div className="w-full h-fit py-3 flex flex-col gap-3">
{/* product list div  */}
<div className="h-fit w-full">


<div className="w-full h-fit py-1 bg-[#adc178] flex relative">

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
        <p>Color : Black</p>
        <p>Quyantity : 2 </p>
        </div>
       

    </div>



</div>

{/* Buy section  */}
<div className="w-full h-12  mt-5 flex gap-2">
    <div className="w-[40%] bg-slate-400 rounded-md grid place-content-center">
        <span>Total Price <br /> 500 BDT</span>
    </div>
    <button className="w-[60%] bg-purple-400 rounded-md">Place Order</button>

</div>

</div>




    </div>




    </div>
  )
}
