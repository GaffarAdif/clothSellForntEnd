import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Card = () => {

  const navigate = useNavigate()

  const CardClickHandle = (value)=>{
    navigate(`/order/${value}`)
  }

  return (


    <div onClick={()=>{CardClickHandle('5')}} className='h-fit w-full border flex justify-center items-center border-black px-1 py-2 rounded-md'>

<div className="w-full h-fit">
<div className="w-full h-fit flex justify-center items-center">
  <img className='h-full rounded-md' src="./Images/Product_images/t_shart (41).jpeg" alt="iamagge" />
</div>


<div className="w-full h-fit flex flex-col">
    <h3 className='text-center'>Style T-Shirt</h3>
    <h2 className='text-center'>220 BDT</h2>
    <button className='w-full h-fit py-1 bg-[#778da9] rounded-md'>Buy</button>
</div>

</div>




    </div>
  )
}
