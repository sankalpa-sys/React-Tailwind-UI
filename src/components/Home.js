import React from 'react';
import Carousal from './Carousal';
import Footer from './Footer';

import ImageCard from './ImageCard';
import Navbar from './Navbar';


function Home() {
  return <div className=''>
      <Navbar/>
      <Carousal/>
      <ImageCard/>
      <Footer />


  </div>;
}

export default Home;
