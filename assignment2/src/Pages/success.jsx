import React from 'react'
import success from "../assets/success.png"
import Navigation from '../Components/navigation'
const Success = () => {
  return (
    <>
    <Navigation />
        <div className='flex flex-col items-center justify-center w-full p-2 gap-9 mt-4'>

<img src={success}/>
<h1 className='text-3xl'>Credits Added to Wallet</h1>
<div className='flex flex-col w-full gap-2'>
<h2>Details</h2>
<div className='border border-[#43038C3B]  w-full rounded-2xl'>

<div className='p-3 '>
    <table className='flex flex-col gap-2'>
        <tr>
        <td>OrderId</td>
        <td>555555eyef</td>
        </tr>

        <tr>
        <td>OrderId</td>
        <td>555555eyef</td>
        </tr>

        <tr>
        <td>OrderId</td>
        <td>555555eyef</td>
        </tr>

        <tr>
        <td>OrderId</td>
        <td>555555eyef</td>
        </tr>

        <tr>
        <td>OrderId</td>
        <td>555555eyef</td>
        </tr>

        <tr>
        <td>OrderId</td>
        <td>555555eyef</td>
        </tr>
        
        <tr>
        <td>OrderId</td>
        <td>555555eyef</td>
        </tr>

        <tr>
        <td>OrderId</td>
        <td>555555eyef</td>
        </tr>

    </table>
</div>



<div className='bg-[#CDBFDD] rounded-b-2xl py-3 px-2 flex justify-between items-center'>
<h2>Paid Amount</h2>
<h2>14522</h2>
</div>
</div>

</div>

<button className='bg-primary w-full justify-center rounded-full px-3 py-2'><h2 className='font-medium text-white'>View Updated Balance</h2></button>
</div>
    </>
  )
}

export default Success