import React from "react";
import SlickSlider from "react-slick";
import "./index.css";




const catSlider = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade : true,
    arrows : true

  };

  return (
    <div className='catSlidersection'>
        <div className='container-fluid'>

        </div>
    </div>
  );
};

export default catSlider;