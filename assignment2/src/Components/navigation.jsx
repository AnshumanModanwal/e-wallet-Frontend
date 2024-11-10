import React from 'react'
import leftArrow from "../assets/arrow-left.png"
const Navigation = ({head}) => {
  return (
    <div className='w-[100%]
    h-auto flex items-center mt-4 shadow-lg p-2'>
<div className='w-[32px] h-[32px] rounded-full  bg-[#725690] flex justify-center items-center'>
<img src={leftArrow} className='w-[16px] h-[16px]'/>

</div>

<h1 className='mx-auto'>{head?head:""}</h1>
    </div>
  )
}

export default Navigation