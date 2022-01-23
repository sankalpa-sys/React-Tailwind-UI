import React from "react";

function Contact() {
  return (
    <div className="mt-10 mb-32 mx-12 ">
      {/* Heading */}

      <div className="flex justify-center items-center flex-col space-y-4 my-20">
        <h1 className="font-bold text-4xl text-gray-700">Contact Us</h1>
        <p className="text-lg font-mono text-gray-600 text-center">
          Have any questions? We'd love to hear from you.
        </p>
      </div>

      {/* Cards */}
      <div className="w-full flex-col md:flex-row space-y-24 md:space-y-0 flex justify-around items-center ">
        {/* single card */} 
        <div className="w-[325px] h-[375px] shadow-lg rounded-xl contact_card">
          <div className="w-full h-2 bg-cyan-500 rounded-xl">
            {/* nothing needed */}
          </div>

          <div className="flex flex-col justify-center items-start  py-8 pl-8 pr-12  h-full">
            <h1 className="font-bold text-xl">Press</h1>

            <p className="text-gray-500 font-sans text-left my-6">
              Are you interested in our latest news or working on Grammarly
              story and need to get in touch?
            </p>

            <button className="border-1 card_button border-cyan-500 w-3/4 rounded-full p-1 my-6 self-center font-semibold text-cyan-500">Visit Press Page</button>
          </div>
        </div>

        {/* Second Card */}

        <div className="w-[325px] h-[375px] shadow-lg rounded-xl contact_card">
          <div className="w-full h-2 bg-emerald-500 rounded-xl">
            {/* nothing needed */}
          </div>

          <div className="flex flex-col justify-center items-start py-8 pl-8 pr-12 h-full">
            <h1 className="font-bold text-xl">Help & Support</h1>

            <p className="text-gray-500 font-sans text-left my-6">
              Our support team is spread across the globe to give you answers fast.
            </p>

            <button className="border-1 card_button border-emerald-500 w-3/4 rounded-full p-1 mt-6 mb-2 self-center font-semibold text-emerald-500">Visit Support Page</button>
            <p className="text-emerald-500 text-xs font-semibold self-center cursor-pointer hover:text-emerald-600">SUBMIT A REQUEST</p>
          </div>
        </div>

        {/* third card */}

        <div className="w-[325px] h-[375px] shadow-lg rounded-xl contact_card">
          <div className="w-full h-2 bg-blue-600 rounded-xl">
            {/* nothing needed */}
          </div>

          <div className="flex flex-col justify-center items-start py-8 pl-8 pr-12 h-full">
            <h1 className="font-bold text-xl">Sales</h1>

            <p className="text-gray-500 font-sans text-left my-6">
              Get is touch with our sales team to see how we can work together.
            </p>

            <button className="card_button border-1 border-blue-600 w-3/4 rounded-full p-1 my-6 self-center font-semibold text-blue-600">Contact Sales</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
