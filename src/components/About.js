import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';


function About() {
  return <div>
    <Navbar />
      <div className='h-screen bg-fixed bg-center  bg-no-repeat bg-cover text-gray-300 flex justify-center items-center' style={{backgroundImage:'url("https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")'}}>
      <h1 className='text-cyan-500 font-mono text-7xl animate-pulse'>ABOUT US</h1>
  </div>

 
  <div className="row featurette  d-flex justify-items-center align-items-center mt-4 pl-4 text-center mb-6">
      <div className="col-md-7 px-4 mb-4">
        <h2 className="featurette-heading text-bold text-yellow-600 text-2xl">INTRODUCTION </h2>
        <p className="lead text-base mt-3 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quod quidem nobis voluptatibus modi, incidunt aliquam, deserunt iusto quis saepe, repellat dignissimos magni culpa officiis ipsam ratione quo vel quas?</p>
      </div>
      <div className="col-md-5">
       <img src="https://images.pexels.com/photos/9899966/pexels-photo-9899966.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className='bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto h-[600px] w-[500px]' alt="" />

      </div>
    </div>
    <hr />
    <div className="row featurette  d-flex justify-items-center align-items-center mt-4 pl-4 text-center mb-6">
      <div className="col-md-7 order-md-2 px-4 mb-4">
        <h2 className="featurette-heading text-bold text-yellow-600 text-2xl">WHAT WE DO? </h2>
        <p className="lead text-base mt-3 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quod quidem nobis voluptatibus modi, incidunt aliquam, deserunt iusto quis saepe, repellat dignissimos magni culpa officiis ipsam ratione quo vel quas?</p>
      </div>
      <div className="col-md-5 order-md-1">
       <img src="https://images.pexels.com/photos/9657830/pexels-photo-9657830.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className='bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto h-[600px] w-[500px]' alt="" />

      </div>
    </div>
    <hr />
    <div className="row featurette  d-flex justify-items-center align-items-center mt-4 pl-4 text-center mb-6">
      <div className="col-md-7 px-4 mb-4">
        <h2 className="featurette-heading text-bold text-yellow-600 text-2xl">Why are we famous?</h2>
        <p className="lead text-base mt-3 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quod quidem nobis voluptatibus modi, incidunt aliquam, deserunt iusto quis saepe, repellat dignissimos magni culpa officiis ipsam ratione quo vel quas?</p>
      </div>
      <div className="col-md-5">
       <img src="https://images.pexels.com/photos/3225529/pexels-photo-3225529.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className='bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto h-[600px] w-[500px] ' alt="" />

      </div>
    </div>

    <div className='h-screen bg-fixed bg-center bg-no-repeat bg-cover text-gray-300 flex justify-center items-center' style={{backgroundImage:'url("https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")'}}>
      <Link to='/contact'><button  className='bg-blue-300  text-black font-semibold font-serif text-center rounded-xl border-2 border-blue-600 p-3 hover:bg-green-300 hover:scale-105 transform transition duration-300 ease-out hover:border-green-600 active:scale-90 '>Contact Us</button></Link>
  </div>
  </div>;
  
}

export default About;
