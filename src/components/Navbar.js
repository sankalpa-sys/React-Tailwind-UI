import { MenuIcon } from '@heroicons/react/outline'
import React,{useState} from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    const [height, setheight] = useState("10");
    const [display, setdisplay] = useState("hidden");
    const handleClick = () => {
        if(height==="10"){
            setheight("60")
        }else{
            setheight("10")
        }
        if(display==="hidden"){
            setdisplay("flex")
        }else{
            setdisplay("hidden")
        }
    }

    const handleLinkClick = () => {
        setheight("10")
        setdisplay("hidden")
    }
    return (
       <div className={`h-${height} bg-gray-100  p-2 relative text-gray-700 transform transition duration-300 ease-out`}>
           <Link to='/'><h1 className='absolute ml-3 text-xl font-bold hover:text-gray-700'>LOGO</h1></Link>

           <div className={`absolute left-1/2 ${display} flex-col mt-4 text-sm text-center space-y-2`}>
               <Link to='/' className='nav_link' onClick={handleLinkClick}>Home</Link>
               <Link to='/about' className='nav_link' onClick={handleLinkClick}>About</Link>
               <Link to='/services' className='nav_link' onClick={handleLinkClick}>Services</Link>
               <Link to='/contact' className='nav_link' onClick={handleLinkClick}>Contacts</Link>
               <Link to='/register' className='nav_link' onClick={handleLinkClick}>Register</Link>
               <Link to='/login' className='nav_link' onClick={handleLinkClick}>Login</Link>
           </div>

           <MenuIcon className='h-8 w-8 absolute right-0 cursor-pointer mb-2 select-none mr-3' onClick={handleClick}/>
       </div>
    )
}

export default Navbar
