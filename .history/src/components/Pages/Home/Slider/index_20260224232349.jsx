import React from "react";
import SlickSlider from "react-slick";
import "./index.css";
import Slider1 from '../../../../assets/images/slider-1-min.png';
import Slider2 from '../../../../assets/images/slider-2-min.png';

const SliderComponent = SlickSlider.default || SlickSlider;

const HomeSlider = () => {

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
    <section className="homeSlider">
      <div className="container-fluid">
        <SliderComponent {...settings} className='home_slider_Main'>
          <div className='item'><img src={Slider1} className='w-100'/>
          <div className='info'><h2 class='mb-4'>Dont miss <br/>Our amazing Grocery Deals</h2></div>
          </div>
          <div className='item'><img src={Slider2} className='w-100'/></div>
        </SliderComponent>
      </div>
    </section>
  );
};

export default HomeSlider;