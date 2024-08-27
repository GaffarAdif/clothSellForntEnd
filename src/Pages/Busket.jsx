import React from 'react'
import { Header } from '../Components/Header'
import { BusketCompo } from '../Components/BusketCompo';
import {useSelector} from 'react-redux'
import '../GlobalCss/global.css'

export const Busket = () => {

const busketData = useSelector((state)=> state.UpdateBusketArray)




  return (
    <div className={`mx-5  ${busketData.length == 0 ?  'busketFullScreen' : null } `}>
   
        < Header />





        {/* main div */}

        {/* for hide or show busket option  */}
{busketData.length !== 0 ? <div className="w-full  h-fit py-3 flex flex-col gap-3">
{/* product list div  */}
<div className="h-fit w-full">

{/* busket component  */}

{busketData.map((value,ind)=>{
     return < BusketCompo key={ind} quyantity={value.productQuyantity} color={value.productColor}   />
        })}
      
{/* busket component  */}










{/* Buy section  */}

<div className="w-full h-12  mt-5 flex gap-2">
    <div className="w-[40%] bg-slate-400 rounded-md grid place-content-center">
        <span>Total Price <br /> 500 BDT</span>
    </div>
    <button className="w-[60%] bg-purple-400 rounded-md">Place Order</button>

</div>

</div>

{/* here the javascript condition colon  */}
    </div> :    <div className="divHightWithoutHeader w-full  flex justify-center items-center">
        <h3 className='text-center text-[25px]'>Your Busket Is Emty <br /> Please Add Item </h3>
      </div>
}





    </div>
  )
}
