import React, { useState } from 'react'
import { Header } from '../Components/Header'
import { AccountManu } from '../Components/AccountManu'
import { Link } from 'react-router-dom'
import '../GlobalCss/global.css'




export const Account = () => {


  const [isLoging,setIsloging] = useState(true)




  return (
    <div className="w-full h-screen px-5">

    <Header />
    {isLoging ?<AccountManu />  : <div className="divHightWithoutHeader w-full  flex flex-col gap-5 justify-center items-center">
<Link to={'/account/loging'} className='h-10 w-[150px] rounded-md bg-yellow-400  flex items-center justify-center'>Loging</Link>
<Link to={'/account/registration'} className='h-10 w-[150px] rounded-md bg-green-400  flex items-center justify-center'>Ragistration</Link>
</div> }

    {/* <AccountManu /> */}
   








</div>
  )
}
