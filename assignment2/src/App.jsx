import { useState } from 'react'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import Auth from './Pages/auth'
import Dashboard from './Pages/dashboard'
import Success from './Pages/success'

function App() {

  const router = createBrowserRouter([

    // {
    //   path:"/",
    //   element:<Auth/>
    // },
    {
      path:"/",
      element:<Dashboard/>
    },
    {
      path:"success",
      element:<Success/>
    }

  ])
 

  return (
   
<div className='w-[100vw] h-[100vh] m-2'>
<RouterProvider router={router}/>
</div>
   
  )
}

export default App
