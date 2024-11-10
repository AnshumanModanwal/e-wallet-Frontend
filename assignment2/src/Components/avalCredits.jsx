import React from 'react'
import brand from "../assets/Brand.png"
const AvalCredits = () => {
  return (
    <div className='rounded-2xl bg-secondary mt-5'>
    <div className=' flex flex-col p-5 gap-4 items-start'>
    <h2>Available Credits</h2>

<div className='flex items-center gap-2'>
<img src={brand}/>
<h1>0</h1>
</div>

<p>Credits can be used for all bookings, food orders, events.</p>
<div className='h-[1px] w-full bg-[#00002F26]'></div>
<button className='rounded-full text-white font-medium text-xs leading-[12px] bg-[#725690] p-2'>What are Credits ?</button>
    </div>


    </div>
  )
}

export default AvalCredits