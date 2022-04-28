import { MenuIcon } from '@heroicons/react/outline'
import React,{useState} from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    const [height, setheight] = useState("12");
    const [display, setdisplay] = useState("hidden");
    const handleClick = () => {
        if(height==="12"){
            setheight("60")
        }else{
            setheight("12")
        }
        if(display==="hidden"){
            setdisplay("flex")
        }else{
            setdisplay("hidden")
        }
    }

    const handleLinkClick = () => {
        setheight("12")
        setdisplay("hidden")
    }


    
    return (
       <div className={`h-${height} select-none md:h-12  bg-gray-900 md:flex items-center justify-between  p-2 relative text-gray-300 transform transition duration-300 ease-out`}>
           <Link to='/'><h1 className='absolute ml-3 text-xl md:static font-bold hover:text-gray-300'>LOGO</h1></Link>

           <div className={`absolute left-1/2 ${display} md:hidden flex-col mt-6 text-sm text-center space-y-2`}>
               <Link to='/' className='nav_link' onClick={handleLinkClick}  >Home</Link>
               <Link to='/about' className='nav_link' onClick={handleLinkClick} >About</Link>
               <Link to='/services' className='nav_link' onClick={handleLinkClick} >Services</Link>
               <Link to='/contact' className='nav_link' onClick={handleLinkClick} >Contacts</Link>
               <Link to='/register' className='nav_link' onClick={handleLinkClick} >Register</Link>
               <Link to='/login' className='nav_link' onClick={handleLinkClick} >Login</Link>
               <Link to='/pricing' className='nav_link' onClick={handleLinkClick} >Pricing</Link>
           </div>

           <MenuIcon className='h-8 w-8 absolute right-0 cursor-pointer mb-2 select-none mr-3 md:hidden' onClick={handleClick}/>

           <div className='hidden md:flex space-x-4 justify-around items-center'>
                <Link to='/' className='nav_link select-none' >Home</Link>
               <Link to='/about' className='nav_link select-none' >About</Link>
               <Link to='/services' className='nav_link select-none' >Services</Link>
               <Link to='/contact' className='nav_link select-none'>Contacts</Link>
               <Link to='/pricing' className='nav_link select-none'>Pricing</Link>
           </div>
           <div className='hidden md:flex justify-around items-center space-x-4 mr-4'>
           <Link to='/register' className='nav_link select-none' >Register</Link>
         <Link to='/login' className='nav_link select-none' >Login</Link>
           </div>
       </div>
    )
}

export default Navbar
