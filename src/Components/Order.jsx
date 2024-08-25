import React, { useState } from 'react'
import '../GlobalCss/global.css'
import { CiSquarePlus,CiSquareMinus  } from "react-icons/ci";
import { SiGithubsponsors } from "react-icons/si";
import iamges from '../../public/Images/Product_images/t_shart (42).jpeg'

export const OrderCompo = () => {

        const [orderQuuntity,setOrderQuantity] = useState(1)


    
      const QuantityHandler = (mathords) =>{
   
        if(mathords == 'incress'){
          setOrderQuantity((prev)=> {
            if(prev < 11){
               return(prev + 1)
            }else{
              return(10)
            }
          } )
        }
   
        if(mathords == 'dicress'){
          setOrderQuantity((prev)=> {
            if(prev > 1){
               return(prev - 1)
            }else{
              return(1)
            }
          } )
        }
      }

     const  SizeHandler = (e)=>{
const  allElementArry = e.target

allElementArry.parentNode.childNodes.forEach(element => {
  element.classList.remove('size-selection')
});

allElementArry.classList.add('size-selection')
     }


  return (
 
<div className="">

{/* iamge div  */}
<div className="h-[250px] w-full mt-3  flex justify-center items-center p-2">
   <img className='h-full rounded-md' src={iamges} alt="iamagge" />
   </div>

   {/* titile and price div  */}
   <div className="h-fit py-2 px-2 w-full bg-[#a1c181] rounded-md grid grid-cols-2">

   <p className=''>Stylish T-shirt</p>
   <p className=''>Price : 220 BDT</p>
   
   </div>

   {/* size selection div  */}
   <div className="h-fit w-full mt-1">


   <button onClick={SizeHandler} className='border px-4 mx-1 my-1 border-black text-[20px] rounded-md duration-500 '>SM</button>
   <button onClick={SizeHandler} className='border px-4 mx-1 my-1 border-black text-[20px] rounded-md duration-500 size-selection'>M</button>
   <button onClick={SizeHandler} className='border px-4 mx-1 my-1 border-black text-[20px] rounded-md duration-500 '>L</button>
   <button onClick={SizeHandler} className='border px-4 mx-1 my-1 border-black text-[20px] rounded-md duration-500 '>XL</button>
   <button onClick={SizeHandler} className='border px-4 mx-1 my-1 border-black text-[20px] rounded-md duration-500 '>XXL</button>


   </div>

   {/* varient selection */}

   <div className="h-fit w-full mt-1">

<button onClick={SizeHandler} className='border p-1 mx-1 border-black text-[20px] rounded-md '>Balck</button>
<button onClick={SizeHandler} className='border p-1 mx-1 border-black text-[20px] rounded-md '>Blue</button>




</div>

   {/* countity adjusment  */}
   <div className="h-[60px] w-[200px] mx-auto mt-2 bg-[#95718665] rounded-md grid grid-cols-3">

     <button onClick={()=> QuantityHandler('incress')} className='grid place-content-center'><CiSquarePlus className='h-10 w-10' /></button>
       <p className='grid place-content-center text-[25px] '>{orderQuuntity}</p>
       <button onClick={()=> QuantityHandler('dicress')} className='grid place-content-center'><CiSquareMinus className='h-10 w-10' /></button>




   </div>

   {/* buy or add to card option  */}
   <div className="w-full h-[60px] relative  mt-2 flex gap-2">
    <button className='absolute top-[-40px] right-0 h-fit'>
        <SiGithubsponsors className='w-10 h-10' />
        </button>

   <button className='w-[70%] h-[60px] bg-[#81b9189c] rounded-md'>Buy Now</button>

   <button className='w-[30%]  h-[60px] bg-[#9f86c0a2] rounded-md'>
    Add To Busket
    </button>
   </div>

</div>
  )
}
