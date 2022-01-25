import React, {useState} from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'

function Carousal() {
    const pictures = [
        "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/1903702/pexels-photo-1903702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/33545/sunrise-phu-quoc-island-ocean.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

    ]

    const [number, setnumber] = useState(0)

    const handleRightClick  = () => {
        setnumber(number + 1)
 
        if(number === (pictures.length-1)){
            setnumber(0)
        }
     
        
    }

    const handleLeftClick  = () => {
        
        setnumber(number - 1)
        if(number === 0){
            setnumber(pictures.length - 1)
        }
    }
    return (
        <div className='md:h-screen sm:h-[500px] h-[500px] w-full  relative focus:outline-none select-none'>
            <img className='h-full w-full' src={pictures[number]} alt="" />

                <ChevronLeftIcon onClick={handleLeftClick} className='absolute ml-4 animate-pulse top-1/2 h-20 w-20 text-gray-300 cursor-pointer'/>
                <ChevronRightIcon onClick={handleRightClick}  className='absolute top-1/2 animate-pulse right-0 mr-4 h-20 w-20 text-gray-300 cursor-pointer '/>
          
        </div>
    )
}

export default Carousal
