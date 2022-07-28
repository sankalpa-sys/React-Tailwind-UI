import { CashIcon,LibraryIcon,CreditCardIcon,DeviceMobileIcon,StatusOnlineIcon } from '@heroicons/react/outline'
import {  XIcon } from '@heroicons/react/solid'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Khalti() {
    const navigate  = useNavigate()
    const handleXClick = () => {
        navigate("/pricing")
    }

    const handleSumbmit = (e) => {
        e.preventDefault()
    }
  return (
    <main className='py-4 relative md:w-1/2 mx-auto md:border-2 md:mt-10 rounded-lg md:shadow-xl  '>
        <h1 className=' text-xl text-center font-sans text-purple-800'>Choose your payment method</h1>

        <section className='flex px-3 py-4 scrollbar-hide space-x-4 md:space-x-2 text-sm font-bold overflow-scroll'>
            <div className='flex items-center h-14  space-x-2 border-b-2 border-yellow-500  '>
                <CashIcon className='h-6 w-6  shrink-0 text-purple-800'/>
                <h3 className='w-32 text-purple-800'>KHALTI WALLET</h3>
            </div>
            <div className='flex h-14 items-center  space-x-2 '>
                <LibraryIcon className='h-6 w-6 shrink-0  text-purple-800'/>
                <h3 className='w-32 '>E-BANKING</h3>
            </div>
            <div className='flex h-14 items-center space-x-2 '>
                <DeviceMobileIcon className='h-6 w-6 shrink-0 text-purple-800'/>
                <h3 className='w-32'>MOBILE BANKING</h3>
            </div>
            <div className='flex h-14 items-center space-x-2 '>
                <StatusOnlineIcon className='h-6 w-6 shrink-0 text-purple-800'/>
                <h3 className='w-32'>CONNECT IPS</h3>
            </div>
            <div className='flex h-14 items-center space-x-2 '>
                <CreditCardIcon className='h-6 w-6 shrink-0 text-purple-800'/>
                <h3 className='w-32'>SCT CARD</h3>
            </div>
        </section>

       <div className='w-full flex items-center justify-center'>
       <img className='' src="https://khalti.s3.ap-south-1.amazonaws.com/KPG/dist/2020.12.17.0.0.0/icons/khalti.png" alt="" />
       </div>

       <form onSubmit={handleSumbmit} className='flex flex-col w-full px-4 space-y-3'>
           <div className='flex flex-col space-y-2'>
             <label htmlFor="phone" className='font-bold text-sm'>Khalti Mobile Number</label>
             <input type="text"  placeholder='Enter khalti registered number' className='h-10 rounded-md outline-none focus:ring-1 ring-cyan-500 focus:border-none px-3 border' id='phone' name='phone' />
           </div>
           <div className='flex flex-col space-y-2'>
             <label htmlFor="pin" className='font-bold text-sm '> Khalti PIN</label>
             <input className='h-10 border rounded-md px-3 outline-none focus:ring-1 ring-cyan-500 focus:border-none' placeholder='Enter Khalti pin' type="text" id='pin' name='pin' />
           </div>
           <button onClick={()=>navigate('/video')} className='text-white font-bold text-sm bg-purple-800 w-32 h-10 rounded-md mx-auto'>Pay $279</button>

           <div className='w-full flex flex-col justify-center items-center space-y-3 mt-3'>
               <h1 className=' text-gray-500 cursor-pointer'>Forgot your Khalti PIN?</h1>
               <h1 className='text-purple-800 cursor-pointer'>SET KHALTI PIN</h1>
           </div>
       </form>
       <div className='absolute top-3 w-full h-6  flex justify-between items-center'>
            <span className='h-full bg-yellow-500'>
                <p className='text-white'>TEST MODE</p>
            </span>
            <XIcon onClick={handleXClick} className='h-6 mr-3 font-bold w-6 cursor-pointer text-gray-800'/>
       </div>
    </main>
  )
}

export default Khalti