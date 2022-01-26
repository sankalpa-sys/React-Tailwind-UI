import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Carousal() {
  return (
    <Carousel autoPlay={true} interval={5000} infiniteLoop={true}>
      <div>
        <img
          src="https://images.pexels.com/photos/33545/sunrise-phu-quoc-island-ocean.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""
          className="select-none"
        />
        <p className="legend">REACT JS</p>
      </div>
      <div>
        <img
          src="https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""
          className="select-none"
        />
        <p className="legend">TAILWIND CSS</p>
      </div>
      <div>
        <img
          src="https://images.pexels.com/photos/1903702/pexels-photo-1903702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""
          className="select-none"
        />
        <p className="legend">HTML</p>
      </div>
      <div>
        <img
          src="https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""
          className="select-none"
        />
        <p className="legend">JAVASCRIPT</p>
      </div>
      <div>
        <img
          src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""
          className="select-none"
        />
        <p className="legend">NEXT JS</p>
      </div>
    </Carousel>
  );
}

export default Carousal;
