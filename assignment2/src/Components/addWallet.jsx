import React from 'react'
import brand from "../assets/Brand.png"
const AddWallet = () => {
  return (
    <div className='rounded-2xl bg-secondary mt-8 overflow-x-hidden'>
    <div className='p-5 flex flex-col
     gap-4'>
        <div className='flex justify-between items-center'>
            <h2>All credits to your wallet</h2>
            <div className='bg-[#CDBFDD] flex rounded-full justify-center items-center min-w-[79px]  gap-2 p-2'>
    
        <h4 className='font-medium text-[12px] '>1 Credit = 1</h4>
            </div>

        </div>
        <p>Choose from our most purchased options</p>
{/* slider */}
      <div className='w-[90vw] overflow-x-auto flex gap-8'>
          {/* slider1 */}
          <div className='border rounded-2xl p-5  border-[#CDBFDD] flex items-start gap-2 min-w-[85%]'>
        <input type='radio'/>
        <div className='flex flex-col gap-2 '>
        
        <div className='flex gap-2 items-center'>
        
        <img src={brand} className='w-[12px]'/>
        <h2>15000 </h2>
        <p>Credits</p>


        </div>
        <p>with</p>
<div className='flex gap-2 items-center'>
<h2 className='text-[#00083046]'><strike>15000</strike></h2>
<h2>14500</h2>
<p>Credits</p>
</div>
        </div>
        <div><h2>30% off</h2></div>


        </div>
    {/* slider2 */}
        <div className='border rounded-2xl p-5 border-[#CDBFDD] flex items-start gap-2'>
        <input type='radio'/>
        <div className='flex flex-col gap-2'>
        
        <div className='flex gap-2 items-center'>
        
        <img src={brand} className='w-[12px]'/>
        <h2>15000 </h2>
        <p>Credits</p>


        </div>
        <p>with</p>
<div className='flex gap-2 items-center'>
<h2 className='text-[#00083046]'><strike>15000</strike></h2>
<h2>14500</h2>
<p>Credits</p>
</div>
        </div>
        <div><h2>30% off</h2></div>


        </div>

      </div>

        <p>or</p>
        <h2>Enter amount Manually</h2>
        <div className='border border-[#CDBFDD] rounded-full w-full '>
            <input type='text' className='rounded-full border  outline-none border-[#F1F0F2] w-full min-h-[40px] p-2 ' placeholder='Enter here'/>
        </div>

        <button className='bg-primary text-white p-2 rounded-full !font-medium'><h2>Proceed to Pay</h2></button>
    </div>
    
    </div>
  )
}

export default AddWallet