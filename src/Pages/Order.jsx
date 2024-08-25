import React from 'react'
import { Header } from '../Components/Header'
import { OrderCompo } from '../Components/Order'
import { useParams } from 'react-router-dom'

export const Order = () => {
const {id} = useParams()

console.log(id)

  return (


    <div className="w-full px-5">

    <Header />
    < OrderCompo />



   
    


</div>


  )
}
