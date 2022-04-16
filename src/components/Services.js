import React,{useState, useEffect} from 'react';
import {shuffle} from 'lodash'
import Navbar from './Navbar';
function Services() {
  const [color, setcolor] = useState(null);

useEffect(() => {
  const colors = [
    'from-indigo-500',
    'from-blue-500',
    'from-green-500',
    'from-red-500',
    'from-yellow-500',
    'from-pink-500',
    'from-purple-500',
    "from-teal-500",
    "from-cyan-500",
    "from-emerald-500"
]
  setcolor(shuffle(colors).pop())
  
}, []);
const colors = [
  'from-indigo-500',
  'from-blue-500',
  'from-green-500',
  'from-red-500',
  'from-yellow-500',
  'from-pink-500',
  'from-purple-500',
  "from-teal-500",
  "from-cyan-500",
  "from-emerald-500"
]

const handleClick = () => {
  setcolor(shuffle(colors).pop())
}

  return (<div className={``}>
    <Navbar/>
        <div className={`flex flex-col space-y-10 justify-center items-center bg-gradient-to-r ${color} to-black h-screen w-screen`}>
        <h1 className='md:text-7xl text-4xl font-bold animate-bounce text-center text-gray-400'>MAINTAINENCE GOING ON</h1>
      <button className='h-12 shadow-lg border-red-600 bg-red-600 rounded-full text-gray-200 p-2 hover:scale-105 transform transition duration-300 ease-out active:scale-90' onClick={handleClick} > Change Color</button>
        </div>
      
  </div>);
}

export default Services;
