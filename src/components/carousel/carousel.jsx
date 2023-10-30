import React from 'react'

import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import logo from "../../assets/titlebar/Logo.png";
import slider1 from "../../assets/slider/slider1.png";
import slider2 from "../../assets/slider/slider2.png";
import slider3 from "../../assets/slider/slider3.png";
import slider4 from "../../assets/slider/slider4.png";
import "./carousel.css"
function Slider() {
  return (
    <>
      <Carousel className='m-8 ' interval={3000}>
        <div>
          <img src={slider1} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={slider2}/>
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={slider3} />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src={slider4} />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </>
  )
}

export default Slider;