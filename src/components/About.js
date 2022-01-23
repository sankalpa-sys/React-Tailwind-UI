import React from 'react';

function About() {
  return <div>
      <div className='h-[600px] bg-fixed bg-center  bg-no-repeat bg-cover text-gray-300 flex justify-center items-center' style={{backgroundImage:'url("https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")'}}>
      <h1 className='text-orange-600 font-sans text-7xl drop-shadow-xl'>ABOUT US</h1>
  </div>

 
  <div className="row featurette  d-flex justify-items-center align-items-center mt-4 pl-4 text-center">
      <div className="col-md-7">
        <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It’ll blow your mind.</span></h2>
        <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
      </div>
      <div className="col-md-5">
       <img src="https://images.pexels.com/photos/983959/pexels-photo-983959.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className='bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto h-[500px] w-[500px' alt="" />

      </div>
    </div>
    <div className="row featurette d-flex justify-items-center align-items-center pr-4 text-center">
      <div className="col-md-7 order-md-2">
        <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It’ll blow your mind.</span></h2>
        <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
      </div>
      <div className="col-md-5 order-md-1">
      <img src="https://images.pexels.com/photos/3007759/pexels-photo-3007759.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className='bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto h-[500px] w-[500px' alt="" />

      </div>
    </div>
    <div className="row featurette d-flex justify-items-center align-items-center mb-4 pl-4 text-center">
      <div className="col-md-7">
        <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It’ll blow your mind.</span></h2>
        <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
      </div>
      <div className="col-md-5">
      <img src="https://images.pexels.com/photos/5847385/pexels-photo-5847385.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className='bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto h-[500px] w-[500px' alt="" />

      </div>
    </div>
    <div className='h-[600px] bg-fixed bg-center bg-no-repeat bg-cover text-gray-300 flex justify-center items-center' style={{backgroundImage:'url("https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")'}}>
      <button  className='bg-blue-300  text-black font-semibold font-serif text-center rounded-xl border-2 border-blue-600 p-3 hover:bg-green-300 hover:scale-105 transform transition duration-300 ease-out hover:border-green-600 active:scale-90 '>Contact Us</button>
  </div>
  </div>;
  
}

export default About;
