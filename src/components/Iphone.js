import React from "react";

function Iphone() {
  return (
    <main className="bg-gradient-to-r from-teal-50 to-cyan-50 h-screen flex justify-center items-center">
      {/* iphone */}
      <section className="h-[600px] w-[85%] mx-auto md:w-1/4  border-2 border-black rounded-3xl flex items-center justify-center relative bg-gradient-to-r from-pink-100 to-pink-200 shadow-xl">
        <img
          src="https://cdn.usbrandcolors.com/images/logos/apple-logo.svg"
          className="h-24 w-24"
          alt=""
        />
        <div className="bg-transparent md:py-2 py-3 px-3  absolute top-4 left-4 rounded-3xl border-2 border-gray-400 shadow-xl flex items-center space-x-2 ">
          <div className="flex flex-col justify-center space-y-2">
            <span className="h-12 w-12 rounded-full border-2 flex items-center justify-center shadow-xl shadow-black/50 bg-gray-800">
              <span className="h-3 w-3 rounded-full  bg-cyan-600 "></span>
            </span>

            <span className="h-12 w-12 rounded-full border-2 flex items-center justify-center shadow-xl shadow-black/50  bg-gray-800">
              <span className="h-3 w-3 rounded-full  bg-cyan-600"></span>
            </span>
          </div>

          {/* right */}
          <div className="flex flex-col items-center space-y-2">
            <span className="rounded-full h-5 w-5  bg-yellow-50 flex items-center justify-center shadow-xl shadow-black  ">
                 <span className="h-2 w-2 ">

                 </span>
            </span>
          <span className="h-12 w-12 rounded-full border-2 flex items-center justify-center shadow-xl shadow-black/50 bg-gray-800">
              <span className="h-3 w-3 rounded-full bg-cyan-600"></span>
            </span>
          
            <span className="rounded-full h-5 w-5 bg-gray-900 flex items-center justify-center shadow-xl shadow-black">
                 <span className="h-2 w-2">

                 </span>
            </span>
             
          </div>
         
        </div>

        {/* buttons */}

        <div className="w-1 h-20 bg-gray-600 absolute top-48 -left-[7px]  ">
        </div>
        <div className="w-1 h-10 bg-gray-600 absolute top-48 -right-[7px]  ">
        </div>
      </section>
    </main>
  );
}

export default Iphone;
