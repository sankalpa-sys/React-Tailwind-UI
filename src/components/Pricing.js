import { CheckIcon} from "@heroicons/react/outline";
import React from "react";
import { useNavigate } from "react-router-dom";
import data from "../data";
function Pricing() {
 const navigate = useNavigate()
  const handleClick = () => {
    navigate('/khalti')
  }
  
  return (
    <div className="bg-[url('https://tailwindui.com/img/beams-bottom-2.jpg')] bg-bottom h-screen flex text-white justify-center items-center">
      <main className="relative h-3/4 w-[90%] md:w-[30%] border-t border-x bg-gradient-to-b from-gray-800 to-gray-900  rounded-xl shadow-md shadow-gray-700 border-cyan-400 pt-10 md:pt-14">
        <span className="bg-cyan-400 text-gray-700  rounded-full absolute -top-5 h-8 flex items-center justify-center w-32 text-xs md:left-[35%] left-[33%] font-bold">Sankalpa Neupane</span>
        <section className="flex  flex-col justify-center items-center space-y-3">
          <h1 className="text-sm tracking-wide font-bold">COMPLETE PACKAGE</h1>
          <div className="flex justify-center items-center space-x-2">
            <p className="line-through text-gray-500 text-lg ">$447</p>
            <p className="text-6xl text-cyan-400 font-bold">$279</p>
            <p className="text-lg font-bold">USD</p>
          </div>
        </section>

        <section className="flex flex-col space-y-3 justify-center items-center  mt-10">
            {data.map((d)=>(
               <div key={d.div} className="flex space-x-3 items-center pl-14 md:pl-20 w-full text-center">
                   <CheckIcon className="h-4 w-4 text-cyan-400"/>
                   <p className=" text-sm">{d.title}</p>
               </div>
                        
            ))}
        </section>

        <footer className="flex flex-col justify-center items-center mt-10">
            <button onClick={handleClick} className="bg-cyan-400 hover:bg-cyan-500 transition-ll duration-300 active:scale-95 transform ease-out font-bold text-gray-800 h-12 text-sm px-12 rounded-lg">Get this Package</button>

            <div className="flex text-sm  cursor-pointer bg-gray-700 mt-6 rounded-full space-x-1 px-3 py-1">
                <p className="text-gray-200">Have a team?</p>
                <p className="text-cyan-400">View team pricing &rarr;</p>
            </div>
        </footer>

      </main>
    </div>
  );
}

export default Pricing;
