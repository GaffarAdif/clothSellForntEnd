import React from 'react'
import { Header } from '../Components/Header'
import { ConfirmOrderConpo } from '../Components/ConfirmOrderConpo'
import { useSelector } from 'react-redux'
import '../GlobalCss/global.css'

export const ConfirmBuy = () => {

  const busketData = useSelector((state)=> state.UpdateBusketArray)

console.log(busketData.length)
  return (
    <div className={`w-full ${busketData.length == 0 ? 'h-screen' : null}`}>
      < Header />

{
  busketData.length == 0 ? <div className="divHightWithoutHeader w-full  flex flex-col items-center justify-center">
  <p>Please Select Product</p>
</div> :  <ConfirmOrderConpo /> 
}






    </div>
  )
}
