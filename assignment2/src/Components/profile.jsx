import React from 'react'
import tick from "../assets/tick.png"
const Profile = () => {
  return (
    <div className='rounded-2xl w-full p-5 shadow-xl flex justify-between border border-[#00002F26] mt-8'>
    <div className='flex gap-3  items-center'>
        <img src={tick} className='rounded-full w-[46px] h-[46px]'/>

        <div className='flex justify-start items-start '>
<div className='flex flex-col gap-3 '>
<h3>Alex</h3>
<p>+91 96284574</p>
</div>


        </div>
    </div>

    <div className='bg-[#CDBFDD] flex rounded-full justify-center items-center min-w-[79px]  gap-2 p-2'>
   <div> <img src={tick} className='w-[16px] h-[16px] rounded-full'/></div>
    <h4 className='font-medium text-[12px] '>Verified</h4>
</div>
    </div>
  )
}

export default Profile