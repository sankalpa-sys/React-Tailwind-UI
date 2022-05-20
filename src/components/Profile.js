import React, {useState} from 'react'

import Pic from '../pp.jpeg'
function Profile() {
  const [followers, setfollowers] = useState(10)
 const [hover, sethover] = useState("hidden")
  const handleMouseEnter = () => { 
    sethover("flex");
  }
  const handleMouseLeave = () => { 
    sethover("hidden");
  }
  return (
    <main className='h-screen  select-none bg-gradient-to-r from-orange-300 to-pink-300 flex justify-center items-center'>
        <section onMouseEnter={handleMouseEnter} onMouseLeave ={handleMouseLeave} className={hover==="flex"?'w-3/4 md:w-[25%]   h-96  rounded-xl relative shadow-2xl transition-height duration-300 bg-gray-200':'w-3/4 md:w-[25%] transition-all duration-300  relative h-64  rounded-xl shadow-2xl bg-gray-200'}>
          <div className={hover==="flex"?'h-[40%] w-[65%] md:w-[40%]  rounded-xl mx-auto relative':'h-[40%] w-[65%] md:w-[40%]  rounded-xl mx-auto relative'}>
            <img src={Pic} alt="" className='rounded-xl object-cover absolute -top-6 object-top' />
          </div>
          <div className={hover === "hidden"?`mt-20 w-full flex flex-col justify-center items-center space-y-2`:"mt-10 w-full flex flex-col justify-center items-center space-y-2"}>
            <h1 className='font-semibold text-sm'>Sankalpa Neupane</h1>
            <p className='text-xs text-gray-500 text-lighter'>Senior UX/UI Designer</p>
          </div>

          <section className={`text-xs  ${hover} transition-all duration-300 w-full justify-around mt-4`}>
              <div className='flex justify-center items-center flex-col'>
                <h1 className='font-semibold'>342</h1>
                <p className='text-gray-500'>Posts</p>
              </div>
              <div className='flex justify-center items-center flex-col'>
                <h1 className='font-semibold'>{followers}k</h1>
                <p className='text-gray-500'>Followers</p>
              </div>
              <div className='flex justify-center items-center flex-col'>
                <h1 className='font-semibold'>285</h1>
                <p className='text-gray-500'>Following</p>
              </div>
          </section>
          <div className={`w-full ${hover} dealy-300 justify-center items-center space-x-3 text-xs mt-6 absolute transition-all duration-300 bottom-6`}>
            <button onClick={()=>setfollowers(followers + 1)} className='bg-pink-400 hover:bg-pink-500 rounded-md px-6 text-light font-semibold transition-colors py-2'>Follow</button>
            <button className='bg-purple-400 transition-colors hover:bg-purple-500 rounded-md px-6 text-light font-semibold py-2 '>Message</button>
          </div>
        </section>
    </main>
  )
}

export default Profile