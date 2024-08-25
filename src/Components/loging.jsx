import React, { useState } from 'react'
import { Header } from './Header'
import { MdEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa6";
import { GoEye,GoEyeClosed } from "react-icons/go";

import '../GlobalCss/global.css'
import { Link } from 'react-router-dom';

export const Logging = () => {
    const [eyeOpen,setEyeopen] = useState(true)
    const [passtpe,setpasstpe] = useState('text')

    const passwordHandle = ()=>{

        if(eyeOpen){
            setpasstpe('password')
        }else{
            setpasstpe('text')

        }

        setEyeopen((prev)=>!prev)
    }
    


  return (

    <div className='h-screen w-full '>
        <Header />

    <div className="w-full divHightWithoutHeader   px-2 py-5 ">

            <div className="w-full h-fit py-5 mt-[80px] bg-[#a4c3b277] rounded-md">

                    <h3 className='w-full h-8 text-center text-[25px]'>Loging</h3>

                  
                    <form className='my-2' method='post'>
                        
                          {/* email section  */}
                        <div className="w-full h-fit py-1 px-1 flex gap-2">
                            <div className="w-[30%] h-10 flex justify-end items-center ">
                                <label className='flex items-center justify-center gap-2' htmlFor="email">Email<MdEmail /> :  </label>
                            </div>
                            <div className="w-[70%] h-fit ">
                                <input required className='h-10 w-full bg-transparent px-2 rounded-md border border-black' type="email" name='email' />
                            </div>
                        </div>
                     {/* email section  */}

                          {/* password section  */}
                        <div className="w-full h-fit py-1 px-1 flex gap-2 mt-2">
                            <div className="w-[30%] h-10 flex justify-end items-center ">
                                <label className='w-full px-1 flex items-center justify-center gap-2' htmlFor="password">Password<FaKey /> :  </label>
                            </div>
                            <div className="w-[70%] h-fit relative ">


                            <button type='button' onClick={passwordHandle} className='absolute top-[50%]  translate-y-[-50%] right-2 text-[25px]'>
                                {eyeOpen ? <GoEye /> : <GoEyeClosed />  } 
                             </button>
                           
                                <input required className='h-10 w-full bg-transparent px-2 rounded-md border border-black' type={passtpe} name='password' />
                            </div>
                        </div>
                     {/* password section  */}

                     {/* loing button   */}
                     <div className="h-fit w-full py-2 flex justify-center items-center mt-2">

                    <button type='submit' className='h-10 w-[75%] rounded-md bg-[#588157]'>Loging</button>

                     </div>
                     {/* loing button   */}

                     <div className="h-fit w-full  flex justify-center items-center mt-2">

                    <Link to={'/account/registration'} className="h-10 w-1/2 bg-[#a3b18a] rounded-md flex items-center justify-center">
                        <span>Registration</span>   
                    </Link>

                     </div>

                    </form>



            </div>



    </div>
    </div>
  )
}
