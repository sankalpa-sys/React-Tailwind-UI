import React from "react";

function Fan() {

  return (
    <main className="h-screen px-4 bg-gray-200  flex items-center  justify-center">
     
        <main className={`bg-gray-900  transition-transform animate-spin duration-300 relative rounded-full h-20 w-20 cursor-pointer flex items-center justify-center`}>
          <span className="bg-gray-800 h-4 w-4 rounded-full "></span>
          <div className="bg-black shadow-lg w-48 h-12 -rotate-[25deg] rounded-r-lg absolute -top-9 -right-[183px] "></div>
          <div className="bg-black shadow-lg w-48 h-12 rotate-[25deg] rounded-l-lg absolute -top-9 -left-[183px] "></div>
          <div className="bg-black shadow-lg w-48 h-12 -rotate-90 rounded-l-lg absolute top-[153px] -left-[58px] "></div>
        </main>
     
    </main>
  );
}

export default Fan;
