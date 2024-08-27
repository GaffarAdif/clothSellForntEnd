import React from 'react'
import { Header } from '../Components/Header'

import '../GlobalCss/global.css'


export const MassengerPage = () => {
  return (
    <div className='h-screen w-full px-5'>
        < Header />
        
<div className="divHightWithoutHeader  w-full flex flex-col gap-2 justify-center items-center">

<a className='w-1/2 h-10 lg:w-[20%] lg:h-[50px]  messegngerIamgebg flex justify-center items-center rounded-md' href="https://m.me/gaffarxadif" target="_blank"> 
  Go To Massenger
</a>
    
</div>

    </div>
  )
}
