import React from "react";
import SlickSlider from "react-slick";
import "./Style.css";
import Slider1 from '../../assets/images/slider-1-min.png';
import Slider2 from '../../assets/images/slider-2-min.png';

const SliderComponent = SlickSlider.default || SlickSlider;

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
            <h2 className='hd'>Featured Categories</h2>
            <SliderComponent {...settings} className='cat_slider_Main'>
                <div className='item'>
                    <img src={Slider1} className='w-100' alt="Slider 1"/>
                </div>
                <div className='item'>
                    <img src={Slider2} className='w-100' alt="Slider 2"/>
                </div>
            </SliderComponent>
        </div>
    </div>
  );
};

export default catSlider;
