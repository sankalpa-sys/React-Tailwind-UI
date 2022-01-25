import React from 'react'

function Login() {
    return (
        <div className='w-full h-screen bg-no-repeat bg-cover bg-right  flex items-center pt-20 justify-center' style={{backgroundImage: 'url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")'}}>
            <div className=' md:w-[33.33%] w-full mx-3 py-10 flex-col space-y-4 bg-gray-200 rounded-lg shadow-2xl shadow-gray-600 flex items-center justify-center px-4 '>
                <h1 className='mt-4 self-start text-3xl font-extralight'>SIGN IN</h1>
                <input type="text" placeholder='username' className='w-full font-light outline-none border-1 border-gray-400 h-10 pl-3' />
                <input type="password" placeholder='password' className='w-full font-light outline-none border-1 border-gray-400 h-10 pl-3' />
                
               

                <button className='self-start h-10 w-20 bg-teal-600 text-white hover:bg-teal-700 active:scale-90 transform transition duration-150 ease-in '>LOGIN</button>
                <p className='self-start cursor-pointer text-sm font-light'>FORGET PASSWORD?</p>
                <p className='self-start cursor-pointer text-sm font-light'>CREATE A NEW ACCOUNT</p>
               
            </div>
        </div>
    )
}

export default Login
