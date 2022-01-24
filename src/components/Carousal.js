import React, {useState} from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'

function Carousal() {
    const pictures = [
        "https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/33545/sunrise-phu-quoc-island-ocean.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/414645/pexels-photo-414645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

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
        <div className='md:h-[600px] sm:h-[300px] h-[300px] w-full  relative focus:outline-none select-none'>
            <img className='h-full w-full' src={pictures[number]} alt="" />

                <ChevronLeftIcon onClick={handleLeftClick} className='absolute ml-4 animate-pulse top-1/2 h-20 w-20 text-gray-300 cursor-pointer'/>
                <ChevronRightIcon onClick={handleRightClick}  className='absolute top-1/2 animate-pulse right-0 mr-4 h-20 w-20 text-gray-300 cursor-pointer '/>
          
        </div>
    )
}

export default Carousal
