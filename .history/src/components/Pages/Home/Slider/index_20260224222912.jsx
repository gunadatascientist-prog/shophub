import React from "react";
import SlickSlider from "react-slick";
import "./index.css";
import Slider1 from '../../../../assets/images/slider-1-min.png'
import Slider2 from '../../../../assets/images/slider-2-min.png'

const SliderComponent = SlickSlider.default || SlickSlider;

const HomeSlider = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <section className="homeSlider">
      <div className="container-fluid">
        <SliderComponent {...settings}>
          <div><img src={Slider1} className='w-100'/></div>
          <div><img src={Slider2} className='w-100'/></div>
        </SliderComponent>
      </div>
    </section>
  );
};

export default HomeSlider;