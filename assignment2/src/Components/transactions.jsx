import React from 'react'
import brand from "../assets/Brand.png"
const Transactions = () => {
    const months =[
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]
    const tabs = [
        "All","Addition","Deduction","Refund"
    ]
  return (
    <div className='mt-5 flex flex-col gap-3'>
    <div className='flex justify-between items-center'>
    <h2>Transactions</h2>
    <select className=' border border-border rounded-full px-2'>
        {
            months.map((month,index)=>(
                <option key={index} ><p className='text-[#280051BA] font-medium '>{month}</p></option>

            ))}
    </select>

    </div>

  <div className='flex gap-9 text-sm px-4 w-full mt-7'>
  {tabs.map((tab,index)=>(
    <button>
        <p>{tab}</p>
    </button>
))}
  
  </div>
  <div className='h-[1px] w-full bg-[#00002F26]'></div>
<div className='border border-secondary bg-secondary flex flex-col w-full p-3 rounded-2xl'>
<div className='flex justify-between'>

    <div className='flex items-start gap-2  justify-between'>
    <img src={brand}/>
    <div className='flex flex-col gap-3'>
        <h2>Added Credits</h2>
        <p>sep 2024</p>
    </div>
    </div>

    <div className='flex flex-col gap-3  '>
        <div className='flex items-center gap-1'>
        <img src={brand} className='w-[14px] h-[14px]'/>
        <h2>+100</h2>
        </div>
        <p>12.32pm</p>

    </div>
</div>


</div>

    </div>
  )
}

export default Transactions