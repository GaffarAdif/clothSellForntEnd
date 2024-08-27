import React from 'react'
import { CiDeliveryTruck,CiLocationOn  } from "react-icons/ci";
import { FaUserPen } from "react-icons/fa6";
import { CiLogout } from "react-icons/ci";
import { FaPen } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";
import { SiGithubsponsors } from "react-icons/si";
import { ImFacebook2 } from "react-icons/im";
import { FaAddressCard } from "react-icons/fa";

export const AccountManu = () => {
  return (
  

  <div className="w-full divHightWithoutHeader flex items-start justify-center">

<div className="w-full mt-10">

{/* profile picture sectoin  */}
<div className="h-[150px] w-[150px] rounded-full mx-auto relative  flex justify-center items-center">
  <button className='absolute top-1 right-1 w-auto h-fit text-[20px] '><FaPen style={{color : 'white'}} /></button>

<img className='h-[140px] rounded-full' src="./Images/Product_images/t_shart (41).jpeg" alt="iamagge" />

</div>

{/* Name section  */}
<div className="w-full h-10">
  <h2 className='text-center text-[25px]'>Gaffar Adif</h2>
</div>
{/* Functionality section  */}
<div className="w-full grid grid-cols-4 gap-1 py-3 ">

  <button className='bg-[#94d2bd] h-fit w-full py-2 flex flex-col justify-center items-center rounded-md'>
    < FaUserPen className='w-8 h-8' />
    <span className='text-[12px]'>Personal Info</span>

    </button>
    <button className='bg-[#94d2bd] h-fit w-full py-2  flex flex-col justify-center items-center rounded-md'>
    < FaAddressCard className='w-8 h-8' />
    <span className='text-[12px]'>My Address</span>

    </button>

  <button className='bg-[#94d2bd] h-fit w-full py-2 flex flex-col justify-center items-center rounded-md'>
    <  SiGithubsponsors  className='w-8 h-8' />
    <span className='text-[12px]'>Wish List</span>

    </button>

  <button className='bg-[#94d2bd] h-fit w-full py-2 flex flex-col justify-center items-center rounded-md'>
    <  CiDeliveryTruck className='w-8 h-8' />
    <span className='text-[12px]'>My Order</span>

    </button>

  <button className='bg-[#94d2bd] h-fit w-full py-2 flex flex-col justify-center items-center rounded-md'>
    < CiLocationOn className='w-8 h-8' />
    <span className='text-[12px]'>Track Order</span>

    </button>

  <button className='bg-[#94d2bd] h-fit w-full py-2  flex flex-col justify-center items-center rounded-md'>
    < MdMenuBook className='w-8 h-8' />
    <span className='text-[12px]'>Policies</span>

    </button>
  <button className='bg-[#94d2bd] h-fit w-full py-2  flex flex-col justify-center items-center rounded-md'>
    < MdOutlineMessage className='w-8 h-8' />
    <span className='text-[12px]'>Notification</span>
    </button>
  <button className='bg-[#94d2bd] h-fit w-full py-2  flex flex-col justify-center items-center rounded-md'>
    < ImFacebook2 className='w-8 h-8' />
    <span className='text-[12px]'>Facebook Page</span>

    </button>


</div>

{/* logout section  */}
<div className="w-full h-fit grid place-content-center mt-5">

  <button className="h-10 w-[170px] bg-gray-500 rounded-md flex justify-center items-center">
    <div className="flex gap-1 justify-center items-center text-[20px]">
        <span>Logout</span>
   < CiLogout />
    </div>
  
    </button>
</div>
</div>
{/* Avatar Section  */}




  </div>



  )
}
