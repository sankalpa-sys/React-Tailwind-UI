import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div className='sticky flex justify-between items-center h-14 bg-gray-900 text-gray-200 w-full'>
            <h1 className='ml-4 font-bold cursor-pointer'>LOGO</h1>

            <div className='flex justify-center items-center space-x-10  flex-grow'>
            <Link to='/'><p className='cursor-pointer hover:text-gray-200 nav_link'>Home</p></Link>
                <Link to='/about'><p className='cursor-pointer hover:text-gray-200 nav_link'>About</p></Link>
                <p className='cursor-pointer hover:text-gray-200 nav_link'>Services</p>
                <Link to='/contact'><p className='cursor-pointer hover:text-gray-200 nav_link'>Contact</p></Link>
            </div>

            <div className='flex justify-center items-center space-x-3 mr-4'>
                <p className='cursor-pointer nav_link'>Register</p>
                <p className='cursor-pointer nav_link'>Login</p>
            </div>
        </div>
    )
}

export default Navbar
