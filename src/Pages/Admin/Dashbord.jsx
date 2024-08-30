import React from 'react'
import { DashbordManu } from '../../Components/Admin/DashbordManu'
import { useNavigate } from 'react-router-dom'

export const Dashbord = () => {

            const AdminCheck = sessionStorage.getItem('admin') || null

            const navigate = useNavigate()
        
            if(AdminCheck){

                return (
                    <div>
                        < DashbordManu />
            
                        <h1>Home Admin Page</h1>
            
                    </div>
                )
            }
            else{

                setTimeout(() => {
                navigate('/admin')
                    
                }, 100);


            }


 
}
