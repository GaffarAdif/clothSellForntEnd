import React, { useState } from 'react'
import '../../GlobalCss/global.css'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


export const AdminLoging = () => {

    const navigate = useNavigate()

    const adminCheck = sessionStorage.getItem('admin')

    const Server = useSelector(state=> state.SerVerUrlSave)

    const [key,setKey] = useState('')


    if(!adminCheck){
    
        const inputHandle = (e)=>{
            const data = e.target.value
            setKey(data)
    
        }
    
                console.log(key)
        const AdminLogingHandle = async (e)=>{
            e.preventDefault()
    
            await axios.get(`${Server}admin/loging/${key}`).then(response=>{
                console.log(response.data.isAdmin)
    
                if(response.data.isAdmin){
    
                    sessionStorage.setItem('admin','adif')
    
                    setTimeout(() => {
                 navigate('/admin/dashbord/')
                    }, 200);
                }
    
            }).catch(error=>{
                console.log(error)
            })
                
    
        }
    
      return (
        <div className='divHightWithoutHeader  flex justify-center items-center'>
            
                <div className="h-[200px] w-[80%] bg-blue-400 rounded-md flex justify-center items-center">
    
                    <form className='w-full h-fit flex flex-col justify-center items-center gap-3' onSubmit={AdminLogingHandle}>
    
                        <input onChange={inputHandle} value={key} className='w-[90%] h-10 rounded-md px-3' type="text" placeholder='Enter Secret' />
    
                        <button type='submit' className='w-[80%] h-10 rounded-md bg-green-400 ' >Loging</button>
    
    
    
                    </form>
    
    
    
    
                </div>
    
        </div>
      )
    
      
    }
    else{
        setTimeout(() => {
            
            navigate('/admin/dashbord')
        }, 200);
    }


}
